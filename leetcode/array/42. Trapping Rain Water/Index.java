class Index {
    public int trap(int[] height) {
        int max = arrayMax(height), count = 0;
        char[][] area = new char[max][height.length];
        for (int i = max - 1; i >= 0; i--) {
            for (int j = 0; j < height.length; j++) {
                char ch = ' ';
                if (height[j] != 0 && i < height[j])
                    ch = '*';
                area[i][j] = ch;
            }
            int l = 0, r = height.length - 1;
            while (l < r) {
                if (area[i][l] == ' ') {
                    l++;
                    continue;
                } else if (area[i][r] == ' ') {
                    r--;
                    continue;
                }
                if (area[i][l] == area[i][r]) {
                    int cur = l;
                    for (int idx = 0; idx < r - l; idx++) {
                        cur++;
                        if (area[i][cur] == ' ') {
                            area[i][cur] = 'x';
                            count++;
                        }
                    }
                    l++;
                } else {
                    r--;
                }
            }
        }
        graphX(area, max, height.length);
        return count;
    }

    public int arrayMax(int[] arr) {
        int max = 0;
        for (int cur : arr)
            max = Math.max(max, cur);
        return max;
    }

    public void graphX(char[][] area, int row, int col) {
        for (int j = row; j >= 1; j--) {
            for (int j2 = 0; j2 < col; j2++) {
                System.out.print(area[j - 1][j2]);
            }
            System.out.println();
        }
    }
    
    public static void graphY(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = arr[i]; j >= 1; j--) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        int h[][] = { { 4, 2, 0, 3, 2, 5 }, { 1 }, { 0, 2, 0 }, { 2, 0, 2 } };
        Index id = new Index();
        System.out.println(id.trap(h[3]));
    }
}