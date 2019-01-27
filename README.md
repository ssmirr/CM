[Ansible](Ansible.md) | [Playbooks](Playbooks.md)

Configuration Management Workshop
----------------------------------

In this workshop, we'll cover the basics of setting up a simple configuration server, enabling ssh access, and using ansible to configure a simple web server.

![image](img/ansible-setup.png)


## Workshop

#### Before you get started

* [opunit and node.js should be installed](https://github.com/CSC-DevOps/profile#opunit), and you pass the course profile check: `opunit profile CSC-DevOps/profile:519.yml`.
* You can create a local VM with VirtualBox/Baker. If you can only get vagrant to work, then you will need to perform [some extra steps](VM.md).

#### Checking progress on workshop

## Creating your configuration server

Verify that ansible was installed using `opunit verify -i opunit_inventory.yml`.