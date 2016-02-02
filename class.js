var storage = function(){
    return {
        get: function(k){
            return JSON.parse(window.localStorage.getItem(k));
        },
        set: function(k, v){
            window.localStorage.setItem(k, JSON.stringify(v));
        }
    }
}

ListCollection = function(k){
    var obj = this;
    obj.key = k;
    obj.list = [];
    obj.store = storage();

    return {
        key: function() {
            return obj.key;
        },
        add: function(msg) {
            obj.list.push(msg);
            obj.store.set(obj.key, obj.list);
        },
        get: function(i) {
            return obj.list[i];
        },
        del: function(i) {
            if( obj.list[i] == undefined )
                return;
            obj.list.splice(i,1);
            obj.store.set(obj.key, obj.list);
        },
        all: function() {
            if( !list.length ){
                obj.list = obj.store.get(obj.key);
                if( obj.list == null )
                    obj.list = [];
            }
            return obj.list;
        }
    };
}
