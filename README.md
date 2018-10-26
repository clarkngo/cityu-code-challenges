# cityu-code-challenges

First challenge: https://www.codewars.com/kata/bit-counting

Choose any programming language to solve this challenge

## start here!
clone this repo!
In your terminal

Using SSH (less prompt for user and password)
<br />

`git clone git@github.com:clarkngo/cityu-code-challenges.git`

OR

Using HTTPS (fine to use too, but might keep bugging you for user and password)
<br />
`https://github.com/clarkngo/cityu-code-challenges.git`


## Let's practice doing git branch
### In your terminal

`git checkout -b 'YOUR_FIRST_NAME'`

(for example:`git checkout -b 'clark'` )

### To check what branch you are currently using

`git branch`

### (Not needed to execute) To switch branches

`git checkout master`

OR

`git checkout YOUR_FIRST_NAME`

For now stay in YOUR_FIRST_NAME branch

## --  the git workflow --

## Go to "test" folder

add a file with YOUR_FIRST_NAME.md in test folder

`git add .`
<br />
`git commit -m 'YOUR_FIRST_NAME readme'`
<br />
`git push origin YOUR_FIRST_NAME`

## Go to GitHub


### Do compare and pull request 
![](/images/full-compare-request.png)

### If not appearing, make sure you are on YOUR branch
![](/images/github-switch-branch.png)


### Click 
![](/images/btn-compare-request.png)

### Next
![](/images/full-pull-request.png)

### Double check if master <- YOUR_FIRST_NAME 
![](/images/btn-base-branch.png)

### Click
![](/images/btn-pull-request.png)

### Merge pull request
![](/images/full-merge-pull-request.png)

### Click
![](/images/btn-merge-pull-request.png)

### Click confirm merge

![](/images/confirm-merge.png)

# Don't update local master until your pull request is merged in github

## update our local
### Switch to master branch
`git branch checkout master`

### Update our local master branch by pulling
`git pull`

### Go back to your branch and start coding again
`git checkout YOUR_FIRST_NAME`

## -- end of git / github workflow --
