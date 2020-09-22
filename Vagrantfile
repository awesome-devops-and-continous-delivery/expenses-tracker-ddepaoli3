Vagrant.require_version ">= 1.7.0"

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  config.vm.network "private_network", ip: "192.168.50.4"

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "site.yml"
    ansible.verbose = "v"
    ansible.extra_vars = {
      ansible_python_interpreter: "/usr/bin/python3",
      ansible_become_user: "root",
      ansible_become: true
    }
  end

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "4096"
  end
end
