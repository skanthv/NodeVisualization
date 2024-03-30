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
  nodes.forEach(node => {
    ctx.fillStyle = '#f00';
    ctx.fillRect(node.x, node.y, 100, 50);
    ctx.fillStyle = '#fff';
    ctx.fillText(node.text, node.x + 10, node.y + 30);
  });
}

function drawLinks() {
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawNodes();
  drawLinks();
}

draw();
