/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if (!node) {
            return null
        }
        const nodeMap = new Map<number, Node>() 
        const queue = [node];
        nodeMap.set(node.val, new Node(node.val));

        for (let head=0; head < queue.length; head++) {
            const _node = queue[head];   
            const clone = nodeMap.get(_node.val);

            for (let _neighbor of _node.neighbors) {
                let neighbor :Node;
                if (nodeMap.has(_neighbor.val)) {
                    neighbor = nodeMap.get(_neighbor.val); 
                } else {
                    neighbor = new Node(_neighbor.val);   
                    queue.push(_neighbor);
                    nodeMap.set(_neighbor.val, neighbor);
                } 
                clone.neighbors.push(neighbor);
            } 
        }  

        return nodeMap.get(node.val); 
    }
}