yaml = require('js-yaml');
 

let yamlFile = `
top:
  children:
    - one
    - two
    - three
  tasks:
    - name: Install nodejs
      apt: pkg='nodejs' state='present'
    - name: Run ls command
      command: ls
`;

try {
  var doc = yaml.safeLoad(yamlFile, 'utf8');
  console.log( JSON.stringify(doc, null, 3));

  // Print children
  for (var child of doc.top.children )
  {
      console.log( child );
  }

  // ACTIVITY: Print name and command property of each object in "tasks" list.

  // THOUGHT: It would not be too hard to implement a simple module by reading the yaml
  // and running: await sshExec(`sudo apt-get install ${pkg} -y`);

} catch (e) {
  console.log(e);
}