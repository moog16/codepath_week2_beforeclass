package com.questions;

import java.util.HashMap;

/**
 * Created by matthewgoo on 1/25/17.
 */
public class ListNode {
    public int val;
    public ListNode next;

    public ListNode(int x) {
        val = x;
        next = null;
    }

    public ListNode detectCycle(ListNode a) {
        ListNode fast = a.next;
        ListNode slow = a;
        HashMap<ListNode, Integer> seenNodes = new HashMap();
        boolean hasCycle = false;

        while (slow != null && fast != null && fast.next != null) {
            if(hasCycle == true) {
                if(seenNodes.containsKey(slow) && seenNodes.get(slow) == 2) {
                    break;
                }
                seenNodes.put(slow, 2);
                slow = slow.next;
                continue;
            }
            if(fast == slow) {
                hasCycle = true;
            }

            fast = fast.next.next;
            slow = slow.next;
        }
        if(hasCycle) {
            boolean hasFoundStart = false;
            ListNode node = a;
            while(!hasFoundStart && a != null && a.next != null) {
                if(seenNodes.containsKey(node) && seenNodes.get(node) == 2) {
                    break;
                }
                node = node.next;
            }
            return node;

        }
        return null;
    }

    public ListNode deleteDuplicates(ListNode a) {
        int num = a.val;
        ListNode currentNode = a;

        while(currentNode != null && currentNode.next != null) {
            boolean hasRemoved = false;
            if(currentNode.next.val == num) {
                currentNode.next = currentNode.next.next;
                hasRemoved = true;
            }

            if(!hasRemoved) {
                currentNode = currentNode.next;
            }

            if(currentNode != null && currentNode.next != null && currentNode.next.val != num) {
                num = currentNode.val;
            }
        }
        return a;
    }

}
