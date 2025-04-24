function augmentingPath(graph, currentNode, targetNode, visited = new Set()) { 
    if (!(currentNode in graph)) return []; 

    if (currentNode === targetNode) return [currentNode]; 

    visited.add(currentNode); 

    for (const neighbor in graph[currentNode]) { 
        const capacity = graph[currentNode][neighbor]; 
        if (capacity > 0 && !visited.has(neighbor)) { 
            const path = augmentingPath(graph, neighbor, targetNode, visited); 
            if (path.length > 0) { 
                return [currentNode, ...path]; 
            } 
        } 
    } 
    return []; 
} 

var graph = {'foo': {},
    'bar': {'foo': 1}};

augmentingPath(graph, 'foo', 'bar');