int[] intArray = new int[]{1,3,4,5,6};
for(int i = 0; i < intArray.length; i++)
{
    for(int j = i; j < intArray.length; j++)
    {
        for(int k = i; k <= j; k++)
        {
            System.out.print(intArray[k]);
        }
    }
}