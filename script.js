const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const nodes = [
  { id: 1, x: 50, y: 50, text: 'Node 1' },
  { id: 2, x: 200, y: 100, text: 'Node 2' },
  { id: 3, x: 150, y: 200, text: 'Node 3' }
];

const links = [
  { source: 1, target: 2 },
  { source: 2, target: 3 },
  { source: 3, target: 1 }
];

function drawNodes() {
  console.log('drawNodes called....');

  nodes.forEach(node => {
    ctx.fillStyle = '#f00';
    ctx.fillRect(node.x, node.y, 100, 50);
    ctx.fillStyle = '#fff';
    ctx.fillText(node.text, node.x + 10, node.y + 30);
  });
}

function drawLinks() {
  console.log('DrawLinks called...');

  links.forEach(link => {
    const sourceNode = nodes.find(node => node.id === link.source);
    const targetNode = nodes.find(node => node.id === link.target);
    ctx.beginPath();
    ctx.moveTo(sourceNode.x + 100, sourceNode.y + 25);
    ctx.quadraticCurveTo((sourceNode.x + targetNode.x + 100) / 2, (sourceNode.y + targetNode.y + 50) / 2, targetNode.x, targetNode.y + 25);
    ctx.stroke();
  });
}

function draw() {
  console.log('Draw called...');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawNodes();
  drawLinks();
}


let nextNodeId = 4; // Start with 4 because nodes 1, 2, and 3 are already created

function addNode() {
  console.log('Adding node...');

  const nodeText = document.getElementById('nodeText').value;
  if (!nodeText) return; // Don't add empty nodes

  const newNode = { id: nextNodeId, x: 300, y: 300, text: nodeText };
  nodes.push(newNode);
  nextNodeId++;

  draw(); // Redraw canvas with the new node
}


draw();
