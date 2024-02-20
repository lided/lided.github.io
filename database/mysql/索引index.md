# 常见索引结构

![](images/Pasted%20image%2020240220211223.png)

![](images/Pasted%20image%2020240220211338.png)

## B Tree

![](images/Pasted%20image%2020240220215046.png)

## B+ Tree

![](images/Pasted%20image%2020240220215144.png)

MySQL索引数据结构对经典的B+Tree进行了优化。在原B+Tree的基础上,增加一个指向相邻叶子节点的链表指针,就形成了带有顺序指针的B+Tree,提高区间访问的性能。

![](images/Pasted%20image%2020240220215215.png)

## Hash

- 只能精确匹配,不能范围查询
- 无法排序
- 查询效率通常比B+高

![](images/Pasted%20image%2020240220214102.png)

## 为什么mysql使用B+

- 二叉树只有俩个分支,在数据量大的情况下层级过多导致效率变慢
- B+ Tree将数据单独放在叶子节点中,相比与B Tree树节点可以存放更多指针
- B+Tree在叶子节点中对所有数据进行排序,有利于排序,范围查询
- hash只能精确查询

# 索引类型

![](images/Pasted%20image%2020240220215951.png)

在InnoDB中,根据存储形式又可区分为

- **聚集索引** 索引中存放的数据为行数据,有且仅有一个
- **二级索引(辅助索引)** 索引中存放的数据为主键

聚集索引选取规则

![](images/Pasted%20image%2020240220220922.png)
