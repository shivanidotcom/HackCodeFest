class Solution {
    public void sortColors(int[] nums) {
//         Arrays.sort(nums);
//         This approach using inbuilt function
        // the below approach is dutch national flag algo 
        int low=0;
        int high=nums.length-1;
        int mid=0;
        while(mid<=high){
            if(nums[mid]==1){
                mid++;
            }else if(nums[mid]==0){
                // swap  low and mid
                int temp=nums[mid];
                nums[mid]=nums[low];
                nums[low]=temp;
                low++;
                mid++;
            }else{
                //swap high and mid
                int temp=nums[mid];
                nums[mid]=nums[high];
                nums[high]=temp;
                high--;
            }
        }
        // tc=O(N)
        // sc=O(1)
        
    }
}
