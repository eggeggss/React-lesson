var TodoForm=React.createClass({
    onSubmit:function(e)
    {
        //不要重整頁面
        e.preventDefault();
        
        var text=this.input.value;    
        this.props.addItem(text);
        this.input.value="";

        console.log(this.input.value);
        //alert(this.input.value);
    },
    inputRef:function(input){

        this.input=input;
    },
    render:function(){
         return(            
            <form onSubmit={this.onSubmit}>
               <input type="text" ref={this.inputRef}/>             
            </form>
         );
    },
 
 });