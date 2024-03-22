# 可见性

当一个变量被定义为volatile时,写操作会把线程本地内存中的值立即写回主内存,读操作会直接从主内存中获取

# 有序性

## 重排序



## 内存屏障

## 读屏障

在读指令之前插入读屏障,缓存失效,从主内存中获取

## 写屏障

在写指令之后插入写屏障,强制将独立内存(缓存)中的数据写回主内存

## 四大指令

- **StoreStore** volatile写操作前面插入
- **Storeload** volatile写操作后面插入
- **LoadLoad** volatile读操作后面插入
- **LoadStore** volatile读操作后面插入

## 总结

1. volatile写之前的操作禁止重排到后
2. volatile读之后的操作禁止重排到前
3. volatile写之后volatile读禁止重排 

# 没有原子性!

