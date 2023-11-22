### 初始化

```sh
# 新建一个目录，将其初始化为Git代码库,不写参数为当前目录
git init [project-name]
# 在指定目录创建一个空的 Git 仓库。创建一个名为 directory，只包含 .git 子目录的空目录。
git init --bare <name>
# 克隆远程库
git clone <url>
```

### 添加

添加文件到当前工作空间中。如果你不使用 git add 将文件添加进去，那么这些文件也不会添加到之后的提交之中

```sh
# name可以是一个或多个文件和目录,支持正则
git add [file]/.

# 添加每个变化前，都会要求确认.
# 对于同一个文件的多处变化，可以实现分次提交
git add -p
```

### 删除

和上面的 add 命令相反，从工作空间中去掉某个文件

```sh
git rm [file]/*

--cached	#停止追踪指定文件，但该文件会保留在工作区
-n	#模拟删除
-f	#强行删除
-r	#允许递归删除，即多级目录
```

### 提交

```sh
#提交暂存区文件到仓库区 message是提交信息
#-v是必须参数。若不写会打开一个文本编辑器写message
git commmit -m 'message'

# 提交暂存区的指定文件到仓库区
git commit [file1]... -m 'message'

-a	#将所有已跟踪文件的更改都提交，无需add。如果有新增的未跟踪文件，它们不会被提交。你需要使用 git add 将它们加入暂存区。
-v	#提交时显示详细的差异信息
--amend	#追加变更到上一次一次提交。可用来多次修改某一次提交
```





### 分支

```sh
# 所有本地分支
git branch 
-r # 所有远程分支
-a # 所有本地和远程分支
-m [old] [new] #重命名
git branch [name] --edit-description # 编辑分支的介绍

git branch [name] # 新建一个分支，但依然停留在当前分支

git checkout [branch-name] # 切换到指定分支，并更新工作区
git checkout -b [name] # 新建一个分支，并切换到该分支
git checkout - # 切换到上一个分支

git branch [name] [commit] # 新建一个分支，指向指定commit

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track [branch] [remote-branch]
# 建立追踪关系，在现有分支与指定的远程分支之间
git branch --set-upstream [branch] [remote-branch]

git merge [branch] # 合并指定分支到当前分支
git merge origin/[branch] # 合并远程分支至当前分支

# 删除分支
git branch -d [name]
# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]

# 选择一个commit，合并进当前分支
git cherry-pick [commit]

```

### 日志

```sh
git log # 显示所有提交
--merges #仅显示合并提交
--stat #查看提交统计信息

# 显示某几条提交信息
git log -n 10

# 查看该文件每次提交记录
git log <file>

# 查看每次详细修改内容的diff
git log -p <file>

# 查看最近两次详细修改内容的diff
git log -p -2
```


### 配置

```sh
# 显示当前的Git配置
git config --list

# 编辑Git配置文件
git config -e [--global]

#设置基本的全局变量 不写为查看
git config --global user.email "your email"
git config --global user.name "your name"

# 为Git命令创建一个快捷方式（别名）。
git config --global alias.<newname> <git-command>
#设置他们的默认编辑器
git config --global core.editor <editor>

#命令行颜色[true/false/auto/always]
git config --global color.ui true
git config --global color.status auto
git config --global color.diff auto
git config --global color.branch auto
git config --global color.interactive auto
```

