public class Solution {
    public static int findMaxConsecutiveOnes(int[] nums) {
        int count = 0, res = 0;
        for (int i : nums) {
            if (i == 0) {
                count = 0;
                continue;
            }
            count++;
            res = res > count ? res : count;
        }
        return res;
    }

    public static void main(String[] args) {
        int[] input = { 1, 0, 1, 1, 0, 1 };
        System.out.println(findMaxConsecutiveOnes(input));
    }
}