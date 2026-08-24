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
        if (!node) return null;

        const queue = [node];
        const nodeMap = new Map<number, Node>()
        nodeMap.set(node.val, new Node(node.val));

        for (let head=0; head < queue.length;head++) {
            const _node = queue[head];   
            let clone;
            if (nodeMap.has(_node.val)) {
                clone = nodeMap.get(_node.val); 
            } else {
                clone = new Node(_node.val); 
            }

            for (let _nb of _node.neighbors) {
                let nb;
                if (nodeMap.has(_nb.val)) {
                    nb = nodeMap.get(_nb.val);
                } else {
                    nb = new Node(_nb.val);
                    queue.push(_nb);
                    nodeMap.set(_nb.val, nb);
                }
                clone.neighbors.push(nb); 
            }  
        }

        return nodeMap.get(node.val);
    }
}