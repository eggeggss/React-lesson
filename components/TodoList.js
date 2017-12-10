var TodoList=React.createClass({
   getInitialState:function()
   {
      return{
                list:[
                    {id:1 ,text:'buy 1 apple',done:false},
                    {id:2 ,text:'buy 2 pen',done:false},
                    {id:3 ,text:'buy 12 pen',done:true},             
                 ],

      };
   },
   toggleItem:function(id)
   {
       /*
       for(var i=0;i<this.state.list.length;i++)
       {       
            var item=this.state.list[i];
            if(item.id===id)
            {
                item.done=! item.done;
                break;
            }
       }

       this.forceUpdate();*/

        var list=this.state.list.map(function(item)
        {
            return (item.id!==id)? item:
            {
                id:item.id,
                text:item.text,
                done:!item.done,

            };
            /*
            if(item.id!==id)
            {
                return item;
            }else
            {
               return {
                    id:item.id,
                    text:item.text,
                    done:!item.done,
               };
            };*/
        });

        this.setState(
            {
                list:list,
            }
        );
        
   },
   addItem: function(text)
   {
      var item={
        text:text,
        done:false,
        id:this.state.list.length+1,
      };
      this.setState({
        list:this.state.list.concat(item),

      });
      /*
        push 塞最後面
        pop 取最後一筆
        shift 最前面一筆
        unshift 塞前面
        concat 產生一個新的array內含新item
        slice 複製陣列
      */
      /*
      this.state.list.push(item);
      this.forceUpdate();*/
   },
   render:function(){
       
        var toggleItem=this.toggleItem;
        return(          
            <div>
                TodoList
                <TodoForm addItem={this.addItem}/>
                <ul>
                  { 
                    this.state.list.map(function(item)
                    {
                        return <TodoItem 
                                done={item.done}
                                id={item.id}
                                key={item.key}
                                toggleItem={toggleItem}>
                                {item.text}
                                </TodoItem>;

                     })
                  }
                </ul>
            </div>

        );
   },

});