resource "google_compute_instance" "workers" {
  count        = "${var.swarm_workers_count}"
  name         = "workers${count.index + 1}"
  machine_type = "${var.instance_type}"
  zone         = "${var.worker_zone}"

  depends_on = ["google_compute_instance.managers"]

  boot_dist {
    initialize_params {
      image = "${var.image_name}"
      size  = 10
    }
  }

  metadata {
    app = "${var.app_name}"
  }

  network_interface {
    network = "${google_compute_network.swarm.name}"
  }
}
