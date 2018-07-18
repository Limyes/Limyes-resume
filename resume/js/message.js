!function(){
  var APP_ID = 'Hq30oxE0ccnYaUEu43ogcbRM-gzGzoHsz';
  var APP_KEY = '8biXDYkWtvbAtkCTPOuWDIG3';

  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
  // 存入数据
  let myForm=document.querySelector('#postMessageForm')
  myForm.addEventListener('submit',function(e){
    e.preventDefault();
    let name=myForm.querySelector('input[name=name]').value;
    let content=myForm.querySelector('input[name=content]').value;
    let Message= AV.Object.extend('Message');
    let message = new Message();
    message.save({
      name:name,
      content: content
    }).then(function(object) {
      let li=document.createElement('li');
      li.innerText=`${object.attributes.name}:${object.attributes.content}`;
      var messageList=document.querySelector('#messageList');
      messageList.appendChild(li);
      myForm.querySelector('input[name=name]').value='';
      myForm.querySelector('input[name=content]').value='';
    })
  })
  // 读取数据
  var query=new AV.Query('Message');
  query.find()
  .then(
    function(messages){
      let array=messages.map((item)=>item.attributes);
      array.forEach((item)=>{
        let li=document.createElement('li');
        li.innerText=`${item.name}:${item.content}`;
        var messageList=document.querySelector('#messageList');
        messageList.appendChild(li);
      })
    },
    function(error){
      alert("提交失败，请重新提交！")
    }
  ).then(()=>{},(error)=>{console.log(error);})
}.call()