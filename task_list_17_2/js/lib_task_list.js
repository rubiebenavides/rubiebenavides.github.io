"use strict";

const taskList = ( () => {
    let tasks = [];                 
    return {                        
        load() {                    
            tasks = storage.retrieve();
            return this;
        },
        save() {                    
            storage.store(tasks);
            return this;
        },
        sort() {
            tasks.sort( (task1, task2) => {
                if (task1.dueDate < task2.dueDate) { 
                    return -1;
                } else if (task1.dueDate > task2.dueDate) { 
                    return 1;
                } else {
                    return 0;
                }
            });
            return this;
        },
        add(task) {
            tasks.push(task);
            return this;
        },
        delete(i) {
            this.sort();
            tasks.splice(i, 1);
            return this;
        },
        clear() {
            storage.clear();
            return this;
        }, 
        *[Symbol.iterator]() {                
            for (let task of tasks) {
                yield task;
            }
        }    
    };
})();