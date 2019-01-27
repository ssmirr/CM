[Ansible](Ansible.md) | [Playbooks](Playbooks.md)

Configuration Management Workshop
----------------------------------

In this workshop, we'll cover the basics of setting up a simple configuration server, enabling ssh access, and using ansible to configure a simple web server.

![image](img/ansible-setup.png)


## Workshop

### Before you get started

* [opunit and node.js should be installed](https://github.com/CSC-DevOps/profile#opunit), and you pass the course profile check:  
   `opunit profile CSC-DevOps/profile:519.yml`
* You can create a local VM with VirtualBox/Baker. If you can only get vagrant to work, then you will need to perform [some extra steps](VM.md).
* Clone this repo with: `git clone https://github.com/CSC-DevOps/CM` 
* Make sure you have a shell open in the right directory: `cd CM`.

### Checking progress on workshop

To check the configuration of the configuration and web server, we will use `opunit` to run checks on the virtual machines listed in the inventory file. We can run checks from the top-level directory as follows: 

```bash
$ opunit verify -i opunit_inventory.yml
```

If you're using vagrant VMs, you'll have to use `-i vagrant_inventory.yml`, instead.

## Creating your servers 

### The configuration server

Let's create a configuration server. This server will be using a "push-based model", where we will be sending configuration commands to other external servers. It also needs to be configured with ansible.

Create the Virtual Machine.

```bash
$ cd servers/ansible-srv
$ cat baker.yml
$ baker bake
```

You should see baker create the virtual machine.

```
✔ Running apt-get update on VM
✔ Preparing ansible
✔ Installing ansible
```

Verify that ansible was installed by running opunit `cd ../..`, then `opunit verify -i opunit_inventory.yml`.

### The web server

Let's create another virtual machine for the web server. 

```bash
$ cd servers/web-srv
$ cat baker.yml
$ baker bake
```

You should see baker create the virtual machine.

## Creating a connection between your servers


