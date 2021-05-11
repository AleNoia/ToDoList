![image](https://user-images.githubusercontent.com/82424777/117688679-605bca00-b18f-11eb-954d-d76fa4cf6ba2.png)

# 📋 toDoList
 
This project is a simple web application of one to do list implemented with Vue.js.

![image](https://user-images.githubusercontent.com/82424777/117679633-d4de3b00-b186-11eb-9c10-f4c2d3fa11f0.png)
***
# 💡 Features
* 📃 List your day-to-day tasks.
* 📈 Have a dashboard with the data of your tasks.
* ✏ Have a simple text editor to build your tasks.
* 📱 Responsive application.
***
# 🛠 Installation
You need to install [Node.js](https://nodejs.org/en/download/) and [Vue.js](https://vuejs.org/v2/guide/), then in order to clone the project, run this command:

```git clone https://github.com/AleNoia/todolist.git```

Install dependencies

```npm install```

***

# 📝 Utilization and code
It  is very simple to use the toDoList.

## 📃 To add one task
To add a new task, just click the "Click here to add one" button or the button in the bottom right corner.
Both buttons will open a modal to add your task.

Task storage is responsible for the ```save()``` method.
``` javascript
save() {
    let id = Date.now() // Creatgin a id by the date.now()
    let tit = document.getElementById("title").innerHTML // Taking the task and storing on the let tit.

    if (tit.length === 0) { // Verifying that the task is not empty.
        this.showNotification = true;
        setTimeout(() => { // If it is empty, a notification will appear.
            this.showNotification = false;
        }, 4500)
    } else {
        // If it is not empty, all data will be stored in the task object.
        let task = {
            id,
            tit,
            concluded: false,
            dateCreate: factory.BuildDate(new Date()), // It will create a custom date according to the current date.
            hourCreate: factory.BuildTime(new Date()), // It will create a custom hour according to the current date.
            concludedDate: String,
            concludedHour: String,
        }
        // It will emit an event that will be heard by the parent component (Home) and the task will be passed to it.
        this.$emit('taskAdded', {
            task: task
        })
        // Finally, the modal will close.
        this.modal = false
    }

},
```

All tasks will be stored in the tasks array in the home component.

```javascript
data() {
 return {
    tasks: []
  }
},
```

## ✏ Text editor
The toDoList text editor is very simple, there is the option to:

Obs: This application uses [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand). This feature is deprecated!

* Make text bold
```javascript
boldFunc() {
    document.execCommand("bold", false, null)
},
```
* Italicize the text
```javascript
italicFunc() {
    document.execCommand("italic", false, null)
},
```
* Underline the text
```javascript
underlineFunc() {
    document.execCommand("underline", false, null)
},
```
* Insert ordered list
```javascript
orderNumFunc() {
    document.execCommand("insertOrderedList", false, null)
},
```
* Insert unordered list
```javascript
unorderedNumFunc() {
    document.execCommand("insertUnorderedList", false, null)
},
```
* Justify to left
```javascript
justifyleftFunc() {
    document.execCommand("justifyleft", false, null)
},
```
* Justify to center
```javascript
justifycenterFunc() {
    document.execCommand("justifycenter", false, null)
},
```
* Justify to right
```javascript
justifyrightFunc() {
    document.execCommand("justifyright", false, null)
},
```

## 📈 Change status
To change the status of the task to completed or to pending just click on the card.
The responsibility for this change lies with the ```donetask()``` method.
```javascript
donetask() {
    this.task.task.concluded = !this.task.task.concluded // Changing status
    this.task.task.concludedDate = factory.BuildDate(new Date()) // Including task completion date.
    this.task.task.concludedHour = factory.BuildTime(new Date()) // Including task completion hour.
},
```

## 📊 Dashboard
The dashboard data comes from component tasks.

The dashboard has three data:
* Percentage of the tasks you have done
* Tasks to do
* Tasks done

```javascript
computed: {
    status() {
        let tasksTotal = this.tasks.length // Task total 
        let tasksToDo = this.tasks.filter(tasks => tasks.task.concluded == false).length // Tasks pending 
        let tasksDone = this.tasks.filter(tasks => tasks.task.concluded == true).length // Tasks done
        let tasksPercent = Math.round(tasksDone / tasksTotal * 100) || 0 // Tasks percent
        return {
            tasksTotal,
            tasksToDo,
            tasksDone,
            tasksPercent
        }
    }
},
```

***
# 📱 Responsiveness
The ToDoList is fully responsive.

![image](https://user-images.githubusercontent.com/82424777/117744603-6bd6e180-b1df-11eb-9e88-336f65f7951e.png)
![image](https://user-images.githubusercontent.com/82424777/117745231-780f6e80-b1e0-11eb-8116-57c91d3e514b.png)
![image](https://user-images.githubusercontent.com/82424777/117745604-2ddabd00-b1e1-11eb-92d3-bffc6bb91118.png)
![image](https://user-images.githubusercontent.com/82424777/117745662-4c40b880-b1e1-11eb-8142-a0822230c604.png)
![image](https://user-images.githubusercontent.com/82424777/117745674-5367c680-b1e1-11eb-9cc8-0e751b46004d.png)
![image](https://user-images.githubusercontent.com/82424777/117745688-58c51100-b1e1-11eb-9000-d5231895cdf3.png)





***
# 🤝 Contributing
Feel free to contribute.


***
# 🧾 License
Released in 2021. This project is under the [MIT license](https://github.com/AleNoia/todolist/blob/main/LICENSE).

Made by [Igor Noia](https://github.com/AleNoia) 🤙
