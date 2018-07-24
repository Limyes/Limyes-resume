// !function(){
//   var view=document.querySelector('section.message');
//   var controller={
//     view:null,
//     messageList:null,
//     form:null,
//     init:function(view){
//       this.view=view;
//       this.messageList=this.view.querySelector('#messageList');
//       this.form=this.view.querySelector('#postMessageForm');
//       this.initAV();
//       this.loadMessages();
//       this.bindEvents();
//     },
//     initAV:function(){
//       var APP_ID = 'Hq30oxE0ccnYaUEu43ogcbRM-gzGzoHsz';
//       var APP_KEY = '8biXDYkWtvbAtkCTPOuWDIG3';
//       AV.init({
//         appId: APP_ID,
//         appKey: APP_KEY
//       });
//     },
//     loadMessages:function(){
//       var query=new AV.Query('Message');
//       query.find()
//       .then(
//         function(messages){
//           let array=messages.map((item)=>item.attributes);
//           array.forEach((item)=>{
//             let li=document.createElement('li');
//             li.innerText=`${item.name}:${item.content}`;
//             this.messageList.appendChild(li);
//           })
//         },
//         function(error){
//           alert("提交失败，请重新提交！")
//         }
//       ).then(()=>{},(error)=>{console.log(error);})
//     },
//     bindEvents:function(){
//         let myForm=this.form;
//         myForm.addEventListener('submit',function(e){
//           e.preventDefault();
//           let name=myForm.querySelector('input[name=name]').value;
//           let content=myForm.querySelector('input[name=content]').value;
//           if(name.replace(/(^\s*)|(\s*$)/g, "")===""||name.replace(/(^\s*)|(\s*$)/g, "").length===0||name===null||content.replace(/(^\s*)|(\s*$)/g, "")===""||content.replace(/(^\s*)|(\s*$)/g, "").length===0||content===null){
//             alert("该项不能为空");
//           }else{
//             let Message= AV.Object.extend('Message');
//             let message = new Message();
//             message.save({
//               name:name,
//               content: content
//             }).then(function(object) {
//               let li=document.createElement('li');
//               li.innerText=`${object.attributes.name}:${object.attributes.content}`;
//               this.messageList.appendChild(li);
//               myForm.querySelector('input[name=name]').value='';
//               myForm.querySelector('input[name=content]').value='';
//             })
//           }
//       })
//     }
//   }
// controller.init(view);
// }.call()

!function(){
  var view=View('section.message')
  var model=Model({resourceName:'Message'})
  var controller=Controller({
    messageList:null,
    form:null,
    init:function(view,controller){
      this.messageList=view.querySelector('#messageList')
      this.form=view.querySelector('form')
      this.loadMessage()
    },
    loadMessage:function(){
      this.model.fetch().then(
        (messages)=>{
          let array=messages.map((item)=>item.attributes)
          array.forEach((item)=>{
            let li=document.createElement('li')
            li.innerText=`${item.name}:${item.content}`
            this.messageList.appendChild(li)
          })
        }
      )
    },
    bindEvents:function(){
      this.form.addEventsListener('submit',(e)=>{
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage:function(){
      let myForm=this.form
      let name=myForm.querySelector('input[name=name]').value;
      let content=myForm.querySelector('input[name=content]').value;
      if(name.replace(/(^\s*)|(\s*$)/g, "")===""||name.replace(/(^\s*)|(\s*$)/g, "").length===0||name===null||content.replace(/(^\s*)|(\s*$)/g, "")===""||content.replace(/(^\s*)|(\s*$)/g, "").length===0||content===null){
        alert("该项不能为空");
      }else{
        this.model.save({
          'name':name,
          'content':content
        }).then(function(object){
          let li=document.createElement('li');
          li.innerText=`${object.attributes.name}:${object.attributes.content}`;
          this.messageList.appendChild(li);
          myForm.querySelector('input[name=name]').value='';
          myForm.querySelector('input[name=content]').value='';
        })
      }
    }
  })
  controller.init(view,model);
}.call()