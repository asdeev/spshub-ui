# /usr/local/bin/python
"""
  Title: component_mapper.py

  Author: Zaid Bhura

  Description: This is a small script to map Vue component files to a
              testMapRaw.js file for Mocha testing.
"""

import argparse
import logging
from glob import iglob
from logging.handlers import TimedRotatingFileHandler
from pathlib import Path


def map_vue_components(logger=None, component_files=None, output_file=None):
    logger.info("Beginning to map Vue components...")

    try:
        with open(output_file, "w") as out:
            file_export = "\nexport default { \n"

            for file_name, file_path in component_files.items():
                file_import = f"import {file_name} from '@/{file_path}';\n"
                file_export += f" {file_name},\n"
                out.write(file_import)
            file_export += "};\n"
            out.write(file_export)
    except IOError as error:
        logger.error(error)

    logger.info("Vue components successfully mapped")


def parse_vue_components(logger=None, component_path=None):
    logger.info("Beginning to parse Vue components...")

    component_files = {}

    for vue_file_name in iglob(f"{component_path}/**/*.vue", recursive=True):
        try:
            vue_file_obj = Path(vue_file_name)

            with open(vue_file_name) as file_obj:
                for line in file_obj:
                    if "vue:test" in line:
                        file_location = vue_file_obj.as_posix()
                        start = file_location.find("src/") + 4
                        end = file_location.find(".vue", start)
                        component_files[vue_file_obj.stem] = file_location[start:end]
                        break
        except IOError as error:
            logger.error(error)

    if not component_files:
        logger.error(
            f"EmptyRootError: No component files found under root component path: {component_path}")
    else:
        logger.info("Vue components successfully parsed")

    return component_files


def get_config(params=None):
    parser = argparse.ArgumentParser()
    parser.add_argument("-l", "--log-path", action="store", required=True)
    parser.add_argument("-c", "--component-path",
                        action="store", required=True)
    parser.add_argument("-o", "--output-file", action="store", required=True)

    if not params:
        args = parser.parse_args()
    else:
        args = parser.parse_args(params)

    return [args.log_path, args.component_path, args.output_file]


def main(params=None):
    """
      This function is used to execute the module as a standalone
      module.
    """
    log_path, component_path, output_file = get_config(params)

    log_formatter = "%(asctime)s - %(levelname)s - %(message)s"

    logging.basicConfig(format=log_formatter, level=logging.INFO)

    logger = logging.getLogger(__name__)
    handler = TimedRotatingFileHandler(
        log_path + "component_mapper.log", when="d", interval=1, backupCount=5)

    handler.setLevel(logging.INFO)
    handler.setFormatter(logging.Formatter(log_formatter))

    logger.addHandler(handler)

    component_files = parse_vue_components(
        logger=logger, component_path=component_path)

    if component_files:
        map_vue_components(
            logger, component_files=component_files, output_file=output_file)


if __name__ == "__main__":
    main()
