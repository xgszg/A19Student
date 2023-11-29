export default {
  englishExam: {
    name: '2022-2023学年数据结构期末考试',
    question: [{
      name: 'block-0',
      category: 'tip',
      tip: `# **2022-2023学年数据结构期末考试**

## **本试卷由以下几个部分组成：**

**选择题:** 20分
**判断题:** 20分
**简答题:** 20分
**程序设计题:** 40分`
    }, {
      name: 'block-1',
      category: 'choice',
      tip: `**一、选择题**`,
      answers: [{
        content: '1',
        question: '在一个二叉树中，每个节点最多有多少个子节点？',
        A: 'A) 1',
        B: 'B) 2',
        C: 'C) 3',
        D: 'D) 4'
      }, {
        content: '2',
        question: '下面哪个数据结构通常用于实现栈？',
        A: 'A) 队列',
        B: 'B) 链表',
        C: 'C) 树',
        D: 'D) 数组'
      }, {
        content: '3',
        question: '哪种排序算法的最坏时间复杂度是O(n^2)？',
        A: 'A) 快速排序',
        B: 'B) 希尔排序',
        C: 'C) 归并排序',
        D: 'D) 冒泡排序'
      }, {
        content: '4',
        question: '下列数据结构中，哪个可以在O(1)的时间复杂度下完成插入和删除操作？',
        A: 'A) 栈',
        B: 'B) 队列',
        C: 'C) 哈希表',
        D: 'D) 二叉树'
      }, {
        content: '5',
        question: '在一个长度为n的数组中查找特定元素的时间复杂度是多少？',
        A: 'A) O(1)',
        B: 'B) O(log n)',
        C: 'C) O(n)',
        D: 'D) O(n^2)'
      }]
    }, {
      name: 'block-2',
      category: 'choice',
      tip: `**一、选择题**`,
      answers: [{
        content: '6',
        question: '哪种数据结构的特点是先进先出？',
        A: 'A) 栈',
        B: 'B) 队列',
        C: 'C) 堆',
        D: 'D) 二叉树'
      }, {
        content: '7',
        question: '下面哪种排序算法的最坏时间复杂度是O(n log n)？',
        A: 'A) 冒泡排序',
        B: 'B) 插入排序',
        C: 'C) 快速排序',
        D: 'D) 堆排序'
      }, {
        content: '8',
        question: '在一个双向链表中，每个节点包含哪些指针？',
        A: 'A) 前驱指针和后继指针',
        B: 'B) 父节点指针和子节点指针',
        C: 'C) 首指针和尾指针',
        D: 'D) 数据指针和指向下一个节点的指针'
      }, {
        content: '9',
        question: '下面哪个操作不是堆的基本操作？',
        A: 'A) 插入',
        B: 'B) 删除最小值',
        C: 'C) 查找',
        D: 'D) 修改'
      }, {
        content: '10',
        question: '下列哪个搜索算法可以保证找到最短路径？',
        A: 'A) 深度优先搜索',
        B: 'B) 广度优先搜索',
        C: 'C) A*搜索',
        D: 'D) 二分搜索'
      }]
    }, {
      name: 'block-3',
      category: 'choice',
      tip: `**一、选择题**`,
      answers: [{
        content: '11',
        question: '在树的遍历中，前序遍历的顺序是怎样的？',
        A: 'A) 中左右',
        B: 'B) 左中右',
        C: 'C) 右中左',
        D: 'D) 左右中'
      }, {
        content: '12',
        question: '下列哪个排序算法不是基于比较的排序算法？',
        A: 'A) 冒泡排序',
        B: 'B) 快速排序',
        C: 'C) 桶排序',
        D: 'D) 归并排序'
      }, {
        content: '13',
        question: '在哈希表中，冲突指的是什么',
        A: 'A) 两个不同的键映射到了同一个位置',
        B: 'B) 一个键映射到了多个位置',
        C: 'C) 哈希函数不可逆',
        D: 'D) 两个键的哈希值相同'
      }, {
        content: '14',
        question: '二叉搜索树的左子树中的所有节点的值都小于根节点的值，右子树中的所有节点的值都大于根节点的值。这种性质称为什么？',
        A: 'A) 完全二叉树性质',
        B: 'B) 平衡二叉树性质',
        C: 'C) 二叉堆性质',
        D: 'D) 二叉搜索树性质'
      }, {
        content: '15',
        question: '哪个算法用于在无序数组中查找元素？',
        A: 'A) 二分查找',
        B: 'B) 线性查找',
        C: 'C) 插值查找',
        D: 'D) 斐波那契查找'
      }]
    }, {
      name: 'block-4',
      category: 'choice',
      tip: `**一、选择题**`,
      answers: [{
        content: '16',
        question: '在图中，什么是顶点的度？',
        A: 'A) 与该顶点相邻的边数',
        B: 'B) 该顶点到另一个顶点的距离',
        C: 'C) 该顶点的出度和入度之和',
        D: 'D) 该顶点的深度'
      }, {
        content: '17',
        question: '下列哪个算法可以用于求解最小生成树问题？',
        A: 'A) Kruskal算法',
        B: 'B) Prim算法',
        C: 'C) Dijkstra算法',
        D: 'D) Floyd算法'
      }, {
        content: '18',
        question: '队列的操作顺序是什么？',
        A: 'A) 先进先出',
        B: 'B) 先进后出',
        C: 'C) 后进先出',
        D: 'D) 后进后出'
      }, {
        content: '19',
        question: '以下哪个数据结构可以用于实现图？',
        A: 'A) 数组',
        B: 'B) 链表',
        C: 'C) 队列',
        D: 'D) 哈希表'
      }, {
        content: '20',
        question: '下列哪种排序算法不稳定？',
        A: 'A) 冒泡排序',
        B: 'B) 插入排序',
        C: 'C) 快速排序',
        D: 'D) 希尔排序'
      }]
    }, {
      name: 'block-5',
      category: 'judge',
      tip: `**二、判断题**`,
      answers: [{
        content: '21',
        question: '二叉树的中序遍历结果是按节点值从小到大排列的。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '22',
        question: '队列是一种线性数据结构，支持随机访问和快速插入和删除。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '23',
        question: '栈和队列都可以使用数组或链表实现。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '24',
        question: '堆排序的时间复杂度为O(nlogn)。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '25',
        question: '二分查找算法只能应用于有序数组中。',
        A: 'A) 正确',
        B: 'B) 错误'
      }]
    }, {
      name: 'block-6',
      category: 'judge',
      tip: `**二、判断题**`,
      answers: [{
        content: '26',
        question: '平衡树是一种可以自动保持平衡的二叉搜索树。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '27',
        question: '哈希表的查找、插入和删除操作都可以在常数时间内完成。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '28',
        question: '链表的访问效率比数组高，因为链表不需要连续的内存空间。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '29',
        question: '希尔排序算法是一种插入排序算法。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '30',
        question: '二叉搜索树的最坏时间复杂度为O(n)，其中n为树中节点的个数。',
        A: 'A) 正确',
        B: 'B) 错误'
      }]
    }, {
      name: 'block-7',
      category: 'judge',
      tip: `**二、判断题**`,
      answers: [{
        content: '31',
        question: '带权图中，任意两个节点之间的距离必须为正数。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '32',
        question: '深度优先搜索（DFS）算法可以用来判断一个有向图是否存在环。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '33',
        question: '线性时间复杂度的排序算法必须基于比较。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '34',
        question: '哈夫曼树是一种最优二叉树，用于压缩数据时可以有效地减少文件大小。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '35',
        question: 'AVL树和红黑树都是自平衡二叉搜索树，但红黑树的平衡调整比AVL树更加简单。',
        A: 'A) 正确',
        B: 'B) 错误'
      }]
    }, {
      name: 'block-8',
      category: 'judge',
      tip: `**二、判断题**`,
      answers: [{
        content: '36',
        question: '有向无环图（DAG）中不存在回路。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '37',
        question: '优先队列可以使用堆或者平衡树实现。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '38',
        question: '动态规划算法通常使用递归或者回溯实现。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '39',
        question: 'B+树是一种多路搜索树，用于在磁盘上存储大量数据。',
        A: 'A) 正确',
        B: 'B) 错误'
      }, {
        content: '40',
        question: '拓扑排序算法可以用来判断一个有向无环图是否存在环。',
        A: 'A) 正确',
        B: 'B) 错误'
      }]
    }, {
      name: 'block-10',
      category: 'ShortAnswer',
      tip: `**三、简答题**`,
      answers: [{
        content: '41',
        question: '什么是栈和队列？请分别介绍它们的应用场景和常见操作。'
      }, {
        content: '42',
        question: '什么是二叉搜索树？请介绍它的特点和常见操作。'
      }
      ]
    }, {
      name: 'block-11',
      category: 'ShortAnswer',
      tip: `**三、简答题**`,
      answers: [{
        content: '43',
        question: '什么是哈希表？请介绍它的实现原理和常见操作。'
      }, {
        content: '44',
        question: '什么是图？请介绍图的基本术语和表示方法。'
      }]
    }, {
      name: 'block-11',
      category: 'code',
      tip: `**四、程序设计题**`,
      answers: [{
        content: '45',
        question: `# [NOI2016] 优秀的拆分

## 题目描述

如果一个字符串可以被拆分为 $\\text{AABB}$ 的形式，其中 $\\text{A}$ 和 $\\text{B}$ 是任意**非空**字符串，则我们称该字符串的这种拆分是优秀的。
例如，对于字符串 $ \\texttt{aabaabaa} $ ，如果令 $\\text{A}=\\texttt{aab}$，$\\text{B}=\\texttt{a}$，我们就找到了这个字符串拆分成 $\\text{AABB}$ 的一种方式。

一个字符串可能没有优秀的拆分，也可能存在不止一种优秀的拆分。
比如我们令 $\\text{A}=\\texttt{a}$，$\\text{B}=\\texttt{baa}$，也可以用 $\\text{AABB}$ 表示出上述字符串；但是，字符串 $\\texttt{abaabaa}$ 就没有优秀的拆分。

现在给出一个长度为$n$的字符串 $S$，我们需要求出，在它所有子串的所有拆分方式中，优秀拆分的总个数。这里的子串是指字符串中连续的一段。

以下事项需要注意：

1. 出现在不同位置的相同子串，我们认为是不同的子串，它们的优秀拆分均会被记入答案。
2. 在一个拆分中，允许出现 $\\text{A}=\\text{B}$。例如 $\\texttt{cccc}$ 存在拆分 $\\text{A}=\\text{B}=\\texttt{c}$。
3. 字符串本身也是它的一个子串。

## 输入格式

每个输入文件包含多组数据。

输入文件的第一行只有一个整数 $T$，表示数据的组数。

接下来 $T$ 行，每行包含一个仅由英文小写字母构成的字符串 $S$，意义如题所述。

## 输出格式

输出 $T$ 行，每行包含一个整数，表示字符串 $S$ 所有子串的所有拆分中，总共有多少个是优秀的拆分。

## 样例 #1

### 样例输入 #1

\`\`\`
4
aabbbb
cccccc
aabaabaabaa
bbaabaababaaba
\`\`\`

### 样例输出 #1

\`\`\`
3
5
4
7
\`\`\`

## 提示

### 样例解释

我们用 $S[i, j]$ 表示字符串 $S$ 第 $i$ 个字符到第 $j$ 个字符的子串（从 $1$ 开始计数）。

第一组数据中，共有三个子串存在优秀的拆分：
$S[1,4]=\\texttt{aabb}$，优秀的拆分为 $\\text{A}=\\texttt{a}$，$\\text{B}=\\texttt{b}$；
$S[3,6]=\\texttt{bbbb}$，优秀的拆分为 $\\text{A}=\\texttt{b}$，$\\text{B}=\\texttt{b}$；
$S[1,6]=\\texttt{aabbbb}$，优秀的拆分为 $\\text{A}=\\texttt{a}$，$\\text{B}=\\texttt{bb}$。
而剩下的子串不存在优秀的拆分，所以第一组数据的答案是 $3$。

第二组数据中，有两类，总共四个子串存在优秀的拆分：
对于子串 $S[1,4]=S[2,5]=S[3,6]=\\texttt{cccc}$，它们优秀的拆分相同，均为 $\\text{A}=\\texttt{c}$，$\\text{B}=\\texttt{c}$，但由于这些子串位置不同，因此要计算三次；
对于子串 $S[1,6]=\\texttt{cccccc}$，它优秀的拆分有两种：$\\text{A}=\\texttt{c}$，$\\text{B}=\\texttt{cc}$ 和 $\\text{A}=\\texttt{cc}$，$\\text{B}=\\texttt{c}$，它们是相同子串的不同拆分，也都要计入答案。
所以第二组数据的答案是 $3+2=5$。

第三组数据中，$S[1,8]$ 和 $S[4,11]$ 各有两种优秀的拆分，其中 $S[1,8]$ 是问题描述中的例子，所以答案是 $2+2=4$。

第四组数据中，$S[1,4]$，$S[6,11]$，$S[7,12]$，$S[2,11]$，$S[1,8]$ 各有一种优秀的拆分，$S[3,14]$ 有两种优秀的拆分，所以答案是 $5+2=7$。

### 数据范围

对于全部的测试点，保证 $1 \\leq T \\leq 10$。以下对数据的限制均是对于单组输入数据而言的，也就是说同一个测试点下的 $T$ 组数据均满足限制条件。

我们假定 $n$ 为字符串 $S$ 的长度，每个测试点的详细数据范围见下表：

| 测试点编号   | $n \\leq$  | 特殊性质           |
| ------------ | --------- | ------------------ |
| $1 \\sim 2$   | $300$     | $S$ 中所有字符相同 |
| $3 \\sim 4$   | $2\\,000$  | $S$ 中所有字符相同 |
| $5 \\sim 6$   | $10$      |                    |
| $7 \\sim 8$   | $20$      |                    |
| $9 \\sim 10$  | $30$      |                    |
| $11 \\sim 12$ | $50$      |                    |
| $13 \\sim 14$ | $100$     |                    |
| $15$         | $200$     |                    |
| $16$         | $300$     |                    |
| $17$         | $500$     |                    |
| $18$         | $1\\,000$  |                    |
| $19$         | $2\\,000$  |                    |
| $20$         | $30\\,000$ |                    |`
      }
      ]
    }, {
      name: 'block-11',
      category: 'code',
      tip: `**四、程序设计题**`,
      answers: [{
        content: '46',
        question: 'Waiting to write!'
      }
      ]
    }, {
      name: 'block-11',
      category: 'code',
      tip: `**四、程序设计题**`,
      answers: [{
        content: '47',
        question: 'Waiting to write!'
      }
      ]
    }, {
      name: 'block-11',
      category: 'code',
      tip: `**四、程序设计题**`,
      answers: [{
        content: '48',
        question: 'Waiting to write!'
      }
      ]
    }]
  }
}
//     {
//       name: 'Part3 tips2',
//       category: 'tip',
//       tip: `## **Part III  Reading Comprehension   (40 minutes)**
//
// **Section A**
//
// **Directions:** *In this section, there is a passage with ten blanks. You are required to choice one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on **Answer Sheet 2** with a single line through the centre. You may not use any of the words in the bank more than once．*`
//     }, {
//       name: 'Part3-1',
//       category: `blanks`,
//       tip: `Just because they can’t sing opera or ride a bicycle doesn’t mean that animals don’t have culture. There’s no better example of this than killer whales. As one of the most \\__26_\\_ *predators*（食肉动物），killer whales may not fit the \\__27_\\_ of a cultured creature. However, these beasts of the sea do display a vast range of highly \\__28_\\_ behaviors that appear to be driving their genetic development.
//
// The word “culture” comes from the Latin “colere,” which \\__29_\\_ means “to cultivate.” In other words, it refers to anything that is \\__30_\\_ or learnt, rather than instinctive or natural. Among human populations, culture not only affects the way we live, but also writes itself into our genes, affecting who we are. For instance, having spent many generations hunting the fat marine mammals of the Arctic, the Eskimos of Greenland have developed certain genetic \\__31_\\_ that help them digest and utilize this fat-rich diet, thereby allowing them to \\__32_\\_ in their cold climate.
//
// Like humans, killer whales have colonized a range of different \\__33_\\_ across the globe, occupying every ocean basin on the planet, with an empire that \\__34_\\_ from pole to pole. As such, different populations of killer whales have had to learn different hunting techniques in order to gain the upper hand over their local *prey*（猎物）. This, in turn, has a major effect on their diet, leading scientists to \\__35_\\_ that the ability to learn population-specific hunting methods could be driving the animals’ genetic development.
//
// <table border="1">
// <tr>
// <td>A) acquired   </td>
// <td>B) adaptations </td>
// <td>C) brutal  </td>
// <td>D) deliberately   </td>
// <td>E) expressed </td>
// </tr>
// <tr>
// <td>F) extends </td>
// <td>G) habitats</td>
// <td>H) humble</td>
// <td>I) image</td>
// <td>J) literally</td>
// </tr>
// <tr>
// <td>K) refined</td>
// <td>L) revolves</td>
// <td>M) speculate</td>
// <td>N) structure</td>
// <td>O) thrive</td>
// </tr>
// </table>`,
//       answers: ['26', '27', '28', '29', '30', '31', '32', '33', '34', '35']
//     }, {
//       name: 'Part3 tips2',
//       category: 'tip',
//       tip: `## **Section B**
//
// **Directions:** *In this section, you are going to read a passage with ten statements attached to it. Each statement contains information given in one of the paragraphs. Identify the paragraph from which the information is derived. You may choose a paragraph more than once. Each paragraph is marked with a letter. Answer the questions by marking the corresponding letter on **Answer Sheet 2***`
//     }, {
//       name: 'Part3-2',
//       category: 'match',
//       tip: `**Living with parents edges out other living arrangements for 18-to 34-year-olds**
//
// A) Broad *demographic* (人口的)shifts is marital status, educational attainment and employment have transformed the way young adults in the U.S. are living, and a new Pew Research Center analysis highlights the implications of these changes for the most basic element of their lives—where they call home. In 2014,for the first time in more than 130 years, adults ages 18 to 34 were slightly more likely to be living in their parents’ home than they were to be living with a spouse or partner in their own household.
//
// B) This turn of events is fueled primarily by the dramatic drop in the share of young Americans who are choosing to settle down romantically before age 35. Dating back to 1880, the most common living arrangement among young adults has been living with a romantic partner, whether a spouse or a significant other. This type of arrangement peaked around 1960, when 62% of the nation’s 18-to 34-year-olds were living with a spouse or partner in their own household, and only one-in-five were living with their parents.
//
// C) By 2014, 31.6% of young adults were living with a spouse or partner in their own household, below the share living in the home of their parent(s) (32.1%). Some 14% of young adults lived alone, were a single parent or lived with one or more roommates. The remaining 22% lived in the home of another family member (such as a grandparent, in-law or *sibling* (兄弟姐妹), a non-relative, or in group quarters like college dormitories.
//
// D) It’s worth noting that the overall share of young adults living with their parents was not at a record high in 2014. This arrangement peaked around 1940, when about 35% of the nation’s 18-to 34-year-olds lived with mom and/or dad (compared with 32% in 2014). What has changed, instead, is the relative share adopting different ways of living in early adulthood, with the decline of romantic coupling pushing living at home to the top of a much less uniform list of living arrangements.
//
// E)Among young adults, living arrangements differ significantly by gender. For men ages 18 to 34, living at home with mom and/or dad has been the dominant living arrangement since 2009, In 2014,28% of young men were living with a spouse of partner in their own home, while 35% were living in the home of their parent(s). Young women, however,are still more likely to be living with a spouse of romantic partner(35%) than they are to be living with their parent(s)(29%).
//
// F) In 2014, more young women (16%) than young men (13%) were heading up a household without a spouse or partner.This is mainly because women are more likely than men to be single parents living with their children. For their part, young men (25%) are more likely than young women (19%) to be living in the home of another family member, a non-relative or in some type of group quarters.
//
// G) A variety of factors contribute to the long-run increase in the share of young. Adults living with the parents. The first in the postponement of, if not retreat from, marriage. The average age of first marriage has risen steadily for decades. In addition, a growing share of young adult may be avoiding marriage altogether. A previous Pew Research Center analysis projected that as many as one-in-four of today’s young adult may never marry. While *cohabitation*（同居）has been on the rise, the overall share of young adults either married or living with an unmarried partner has substantially fallen since 1990.
//
// H) In addition, trends in both employment status and wages have likely contributed to the growing share of young adults who are living in the home of their parent(s), and this is especially true of young men. Employed young men are much less likely to live at home than young men without a job, and employment among young men has fallen significantly in recent decades. The share of young men with jobs peaked around 1960 at 84%. In 2014, only 71% of 18-to-34-year-old men were employed. Similarly with earnings, young men’s wages (after adjusting for inflation) have been on a downward *trajectory* (轨迹) since 1970 and fell significantly form 2000 to 2010. As wages have fallen ,the share of young men living in the home of their parent(s) has risen.
//
// I) Economic factors seem to explain less of why young adult women are increasingly likely to live at home. Generally, young women have had growing success in the paid labor market since 1960 and hence might increasingly be expected to be a be to afford to afford to live independently of their parents. For women, delayed marriage—which is related, in part, to labor market outcomes for men—may explain more of the increase in their living in the family home.
//
// J) The Great Recession (and modest recovery) has also been associated with an increase in young adults living at home. Initially in the wake of the recession, college enrollments expanded, boosting the ranks of young adults living at home. And given the weak job opportunities facing young adults, living at home was part of the private safety net help young adults to weather the economic storm.
//
// K) Beyond gender, young adult’s living arrangements differ considerable by education—which is tied to financial means. For young adults without a bachelor’s degree, as of 2008 living at home with their parents was more prevalent than living with a romantic partner. By 2014, 36% of 18-to 34-year-olds who had not completed a bachelor’s degree were living with their parent(s) while 27% were living with a spouse or partner. Among college graduates, in 2014 46% were married or living with a partner, and only 19% were living with their parent(s). Young adults with a college degree have fared much better in the labor market than their less-educated counterparts, which has in turn made it easier to establish their own households.`,
//       answers: {
//         '36': 'Unemployed young men are more likely to live with their parents than the employed.',
//         '37': 'In 2014, the percentage of men aged 18 to 34 living with their parents was greater than that of their female counterparts.',
//         '38': 'The percentage of young people who are married or live with a partner has greatly decreased in the past three decades or so.',
//         '39': 'Around the mid-20th century, only 20 percent of 18- to 34-year-old lived in their parents’ home.',
//         '40': 'Young adults with a college degree found it easier to live independently of their parents.',
//         '41': 'Young men are less likely to end up as single parents than young women.',
//         '42': 'More young adult women live with their parents than before due to delayed marriage.',
//         '43': 'The percentage of young men who live with their parents has grown due to their decreased pay in recent decades.',
//         '44': 'The rise in the number of college students made more young adults live with their parents.',
//         '45': 'One reason for young adults to live with their parents is that get married late or stay single all their lives.'
//       }
//     }, {
//       name: 'Part3 tips3',
//       category: 'tip',
//       tip: `**Section C**
//
// **Directions:** *There are 2 passages in this section. Each passage is followed by some questions or unfinished statements. For each of them there are four choices marked A), B), C) and D). You should decide on the best choice and mark the corresponding letter on **Answer Sheet 2** with a single line through the centre.*`
//      }
//     divided about whether the imbalance in corporate America will change in the foreseeable future, even though women have made major advances in the workplace. While 53% believe men will continue to hold more top executive positions in business in the future, 44% say it’s only a matter of time before as many women are in top executive positions as men. Americans are less doubtful when it comes to politics: 73% expect to see a female president in their lifetime.`,
//       answers: [{
//         number: '46',
//         content: `46.What do most Americans think of women leaders according to a new Pew Research Center survey?`,
//         A: 'A)They have to do more to distinguish themselves.',
//         B: 'B)They have to strive harder to win their positions.',
//         C: 'C)They are stronger than men in terms of willpower.',
//         D: 'D)They are just as intelligent and innovative as men.'
//       }, {
//         number: '47',
//         content: `47.What do we learn from previous survey findings about women seeking leadership roles?`,
//         A: 'A)They have unconquerable difficulties on their way to success.',
//         B: 'B)They are lacking in confidence when competing with men.',
//         C: 'C)Their failures may have something to do with family duties.',
//         D: 'D)Relatively few are hindered in their career advancement.'
//       }, {
//         number: '48',
//         content: `48.What is the primary factor keeping women from taking top leadership positions according to the recent survey?`,
//         A: 'A)Personality traits.',
//         B: 'B)Family responsibilities.',
//         C: 'C)Gender bias.',
//         D: 'D)Lack of vacancies.'
//       }, {
//         number: '49',
//         content: `49.What does the passage say about corporate America in the near future?`,
//         A: 'A)More and more women will sit in the boardroom.',
//         B: 'B)Gender imbalance in leadership is likely to change.',
//         C: 'C)The public is undecided about whether women will make good leaders.',
//         D: 'D)People have opposing opinions as to whether it will have more women leaders.'
//       }, {
//         number: '50',
//         content: `50.What do most Americans expect to see soon on America’s political stage?`,
//         A: 'A)A woman in the highest position of government.',
//         B: 'B)More and more women actively engaged in politics.',
//         C: 'C)A majority of women voting for a female president.',
//         D: 'D)As many women in top government positions as men.'
//       }]
//     }, {
//       name: 'Part3-3-2',
//       category: 'reading',
//       tip: `**Passage Two**
//
// **Questions 51 to 55 are based on the following passage.**
//
// People have grown taller over the last century, with South Korean women shooting up by more than 20cm on average, and Iranian men gaining. 16.5cm. A global study looked at the average height of 18-year-olds in 200 countries 1914 and 2014.
//
// The results reveal that while Swedes were the tallest people in the world in 1914, Dutch men have risen from 12th place to claim top spot with an average height of 182.5cm. Larvian women. Meanwhile, rose from 28th place in 1914 to become the tallest in the world a century later, with an average height of 169.8cm.
//
// James Bentham, a co-author of the research from Imperial College, London, says the global trend is likely to be due primarily to improvements in nutrition and healthcare. “An individual’s genetics has a big influence on their height, but once you average over whole populations, genetics plays a less key role,” he added.
//
// A little extra height brings a number of advantages, says Elio Riboli of Imperial College. “Being taller is associated with longer life expectancy,” he said. “This is largely due to a lower risk of dying of *cardiovascular*（心血管的）disease among taller people.”
//
// But while height has increased around the world, the trend in many countries of north and sub-Saharan Africa causes concern, says Riboli. While height increased in Uganda and Niger during the early 20th century, the trend has reversed in recent years, with height decreasing among 18-year-olds.
//
// “One reason for these decreases in height is the economic situation in the 1980s,” said Alexander Moradi of the Universith of Sussex. The nutritional and health crises that followed the policy of structural adjustment, he says, led to many children and teenagers failing to reach their full potential in terms of height.
//
// Bentham believe the global rtend of increasing height has important implications. “How tall we are now is strongly influenced by the environment we grew up in,” he said. “If we give children the best possible start in life now, they will be healthier and more productive for decades to come.”
// `,
//       answers: [{
//         number: '51',
//         content: `51. What does the global study tell us about people’s height in the last hundred years?`,
//         A: 'A）There is a remarkable difference across continents.',
//         B: 'B）There has been a marked increase in most countries.',
//         C: 'C）The increase in people’s height has been quickening.',
//         D: 'D）The increase in women’s height is bigger than in men’s.'
//       }, {
//         number: '52',
//         content: `52. What does James Bentham say about genetics in the increase of people’s height?`,
//         A: 'A）It counts less than generally thought.',
//         B: 'B）It outweighs nutrition and healthcare.',
//         C: 'C）It impacts more on an individual than on population.',
//         D: 'D）It plays a more significant role in females than in males.'
//       }, {
//         number: '53',
//         content: `53. What does Elio Riboli say about taller people?`,
//         A: 'A）They tend to live longer. ',
//         B: 'B）They enjoy an easier life.',
//         C: 'C）They generally risk fewer fatal diseases.',
//         D: 'D）They have greater expectations in life.'
//       }, {
//         number: '54',
//         content: `54. What do we learn about 18-year-olds in Uganda and Niger?`,
//         A: 'A) They grow up slower than their peers in other countries.',
//         B: 'B) They are actually shorter than their earlier generations.',
//         C: 'C) They find it hard to bring their potential into full play.',
//         D: 'D) They have experienced many changes of government'
//       }, {
//         number: '55',
//         content: `55. What does James Bentham suggest we do?`,
//         A: 'A) Watch closely the global trend in children’s development.',
//         B: 'B) Make sure that our children grow up to their full height.',
//         C: 'C) Try every means possible to improve our environment.',
//         D: 'D) Ensure our children grow up in an ideal environment.'
//       }]
//     }, {
//       name: '56',
//       category: 'writing',
//       tip: `## **Part Ⅳ  Translation   (30 minutes)**
//
// **Directions:** *For this part, you are allowed 30 minutes to translate a passage from Chinese into English. You should write your answer on **Answer Sheet 2***
//
// 灯笼起源于东汉，最初主要用于照明。在唐代，人们用红灯笼来庆祝安定的生活。从那时起，灯笼在中国的许多地方流行起来。灯笼通常用色彩鲜艳的薄纸，形状和尺寸各异。在中国传统文化中，红灯笼象征生活美满和生意兴隆，通常在春节、元宵节和国庆等节日期间悬挂。如今，世界上许多其他地方也能看到红灯笼。`
//     }]
//   },
//   qusitonName: [
//     'Part 1 Writing',
//     'Part 2 Section A Tips',
//     'Question 1-2',
//     'Question 3-4',
//     'Question 5-7',
//     'Part 2 Section B Tips',
//     'Question 8-11',
//     'Question 12-15',
//     'Part 2 Section C Tips',
//     'Question 16-18',
//     'Question 19-21',
//     'Question 22-25',
//     'Part 3 Section A Tips',
//     'Question 26-35',
//     'Part 3 Section B Tips',
//     'Question 36-45',
//     'Part 3 Section C Tips',
//     'Question 46-50',
//     'Question 51-55',
//     'Part 4 Translation'
//   ]

