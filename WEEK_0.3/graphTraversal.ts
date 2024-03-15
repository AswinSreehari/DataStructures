interface Graph {
    [key: string]: string[];
}

function dfs(graph: Graph, start: string): void {
    const visited = new Set<string>();
    const stack: string[] = [start];

    while (stack.length > 0) {
        const node = stack.pop()!;
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node);
            stack.push(...graph[node].filter(neighbor => !visited.has(neighbor)));
        }
    }
}

function bfs(graph: Graph, start: string): void {
    const visited = new Set<string>();
    const queue: string[] = [start];

    while (queue.length > 0) {
        const node = queue.shift()!;
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node);
            queue.push(...graph[node].filter(neighbor => !visited.has(neighbor)));
        }
    }
}

function topologicalSort(graph: Graph): string[] {
    const visited = new Set<string>();
    const stack: string[] = [];

    function visit(node: string): void {
        visited.add(node);
        graph[node].forEach(neighbor => {
            if (!visited.has(neighbor)) {
                visit(neighbor);
            }
        });
        stack.push(node);
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            visit(node);
        }
    }

    return stack.reverse();
}

// Example Graphs
const graph1: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

const graph2: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

const graph3: Graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D', 'E'],
    D: [],
    E: []
};

// Running DFS Traversal
console.log("DFS Traversal:");
dfs(graph1, 'A'); // A, B, D, E, C, F

// Running BFS Traversal
console.log("BFS Traversal:");
bfs(graph2, 'A'); // A, B, C, D, E, F

// Running Topological Sort
console.log("Topological Sort:");
console.log(topologicalSort(graph3).join(', ')); // E, D, C, B, A
