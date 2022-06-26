在App父组件中引入Title和Count组件，在钩子函数componentDidMount中修改count，使其每秒增加1.此时只修改了count组件，title组件没变，但是页面渲染时会同时重复渲染title组件，会造成性能消耗.

所以采用的解决方案：

(1) 利用shouldComponentUpdate阻止其重新渲染

(2) 利用PureComponent解决

(3) 采用React.memo