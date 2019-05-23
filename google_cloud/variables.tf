variable "app_name" {
  description = "Application name"
  default     = "SPSHUB"
}

variable "project" {
  description = "Project name"
  default     = "spshub"
}

variable "credentials" {
  description = "Credentials to access project"
  default     = "spshub_gcp_creds.json"
}

variable "region" {
  description = "Location of the project"
  default     = "us-west1"
}

variable "instance_type" {
  description = "Type of VM to create for the node"
  default     = "f1-micro"
}

variable "image_name" {
  description = "The OS image of the nodes"
  default     = "centos-7"
}

variable "swarm_managers_count" {
  description = "Count of managers to have in the swarm"
  default     = 1
}

variable "swarm_workers_count" {
  description = "Count of workers to have in the swarm"
  default     = 2
}

variable "manager_zone" {
  description = "Zone location for the manager nodes"
  default     = "us-west1-a"
}

variable "worker_zone" {
  description = "Zone location for the worker nodes"
  default     = "us-east1-b"
}
