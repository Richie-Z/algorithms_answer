public class Solution {
    public int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0;
        int trap = 0;
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax)
                    leftMax = height[left];
                else
                    trap += leftMax - height[left];
                left++;
            } else {
                if (height[right] >= rightMax)
                    rightMax = height[right];
                else
                    trap += rightMax - height[right];
                right--;
            }
        }
        return trap;
    }

    public static void main(String[] args) {
        int[] input = { 4, 2, 0, 3, 2, 5 };
        Solution sol = new Solution();
        System.out.println(sol.trap(input));
    }
}