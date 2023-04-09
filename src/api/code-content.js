export default {
  code: [{
    id: '0',
    content: `#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

int main()
{
    string s,s1,s2;

    char c;
    while(cin>>c,c!=',') s+=c;
    while(cin>>c,c!=',') s1+=c;
    while(cin>>c) s2+=c;

    if(s1.size()>s.size()||s2.size()>s.size()) puts("-1");

    else
    {
        int l=0;
        while(l+s1.size()<=s.size())
        {
            int k=0;
            while(k<s1.size())
            {
                if(s[l+k]!=s1[k]) break;
                k++;
            }
            if(k==s1.size()) break;
            l++;
        }

        int r=s.size()-s2.size();
        while(r>=0)
        {
            int k=0;
            while(k<s2.size())
            {
                if(s[r+k]!=s2[k]) break;
                k++;
            }
            if(k==s2.size()) break;
            r--;
        }

        l+=s1.size()-1;
        if(l>=r) puts("-1");
        else cout<<r-l-1<<endl;
    }

    return 0;

}`
  }, {
    id: '1',
    content: `import java.io.*;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

// 847 图中点的层次
public class Main {
    static int N = 100010;
    static int[] e = new int[N];    // 值
    static int[] h = new int[N];    // 头节点
    static int[] ne = new int[N];   // 存储下一个节点
    static int[] d = new int[N];    // 存储距离
    static int idx, n, m;
    static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
    static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

    public static void add(int a, int b) {
        e[idx] = b;
        ne[idx] = h[a];
        h[a] = idx;
        idx++;
    }

    public static int bfs() {
        Arrays.fill(d, -1);  // 初始化距离为-1
        d[1] = 0;
        Queue<Integer> q = new LinkedList<>();
        q.offer(1); // 第一层入队
        // 当队列不为空时
        while (!q.isEmpty()) {
            // 队首出队
            int t = q.poll();
            // 遍历节点t的下一个节点
            for (int i = h[t]; i != -1; i = ne[i]) {
                int j = e[i];
                // 若这个节点没有走过，则当前距离+1
                if (d[j] == -1) {
                    d[j] = d[t] + 1;
                    q.offer(j); // 这个节点入队
                }
            }
        }
        return d[n];
    }

    public static void main(String[] args) throws IOException {
        String[] s = reader.readLine().split(" ");
        n = Integer.parseInt(s[0]);
        m = Integer.parseInt(s[1]);
        // 头节点
        Arrays.fill(h,-1);
        for (int i = 0; i < m; i++) {
            s = reader.readLine().split(" ");
            int a = Integer.parseInt(s[0]);
            int b = Integer.parseInt(s[1]);
            add(a,b);
        }
        writer.write(bfs()+"\\n");
        writer.flush();
    }
}`
  },{
    id: '2',
    content: `import java.io.*;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;


`
  }]
}
