class Main{ 
 public static void main(String[] args) { 
 if(add(1,2) != 3){ 
 System.out.println("test 1 failed"); 
 return; 
 } 
 System.out.println("Success"); 
 return; 
 }public static int add(int a, int b){ 
return a + b;

 }
}