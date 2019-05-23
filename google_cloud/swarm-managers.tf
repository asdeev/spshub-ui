resource "google_compute_instance" "managers" {
  count        = "${var.swarm_managers_count}"
  name         = "manager"
  machine_type = "${var.instance_type}"
  zone         = "${var.manager_zone}"

  boot_disk {
    initialize_params {
      image = "${var.image_name}"
      size  = 10
    }
  }

  metadata {
    app = "${var.app_name}"
  }

  network_interface {
    network       = "${google_compute_network.swarm.name}"
    access_config = {}
  }
}
