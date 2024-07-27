# Issues
[ ] @ 과 : 언제 사용하는 것이며 차이는 무엇인가?
```
v-bind:href == :href
v-on:click == @click
```

# Lifecycle Methods of vue.js

Lifecycle Methods

-`onBeforeMount`: Called before mounting begins.  
-`onMounted`: Called when the component is mounted.  
-`onBeforeUpdate`: Called when reactive data changes and before re-rendering.  
-`onUpdated`: Called after re-rendering.  
-`onBeforeUnmount`: Called before the Vue instance is destroyed.  
-`onUnmounted`: Called after the instance is destroyed.  
-`onActivated`: Called when a kept-alive component is activated.  
-`onDeactivated`: Called when a kept-alive component is deactivated.  
-`onErrorCaptured`: Called when an error is captured from a child component.  

# Learned
- React 나 vue의 경우 당연한 이야기지만, href = 'index.html' 보다 RouterLink를 통해서 이동하는 것이 (페이지 전체를 리로딩하는 것이 아니라 필요한 부분을 바꿔끼우는 방식으로 작동하므로) 훨씬 빠르다.