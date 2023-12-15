var rightconnection = false;
var datapoints1 = [];
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },

        // notice there are no dragOptions specified here, which is different from the
        // draggableConnectors2 demo.  all connections on this page are therefore
        // implicitly in the default scope.
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }

        },

        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare2 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint2);
        },
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare3 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint3);
        },
        endpoint4 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare4 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint4);
        },
        endpoint5 = {
            anchor: [0.5, 0.5, 0, 1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare5 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint5);
        },
        endpoint6 = {
            anchor: [0.5, 0.5, 0, 1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare6 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint6);
        },
        endpoint7 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare7 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint7);
        },
        endpoint8 = {
            //anchor: [-0.8, 1.9, 0, -1],
            anchor: [0.5, 0.5, 0, 1],
            connectorStyle: { strokeWidth: 4, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare8 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint8);
        },
        endpoint9 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare9 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint9);
        },
        endpoint10 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare10 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint11 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare11 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint11);
        },
        endpoint12 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare12 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint12);
        },
        endpoint13 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare13 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint13);
        },
        endpoint14 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }

        },


        prepare14 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint14);
        },
        endpoint15 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }

        },

        prepare15 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint14);
        },



        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "images/littledot.png" }],

        Connector: ["Bezier", { curviness: -50 }],
        Container: "canvas"

    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare4("ld4"),
            e5 = prepare5("ld5"),
            e6 = prepare6("ld6"),
            e7 = prepare7("ld7"),
            e8 = prepare8("ld8"),
            e9 = prepare9("ld9"),
            e10 = prepare10("ld10"),
            e11 = prepare11("ld11"),
            e12 = prepare12("ld12"),
            e13 = prepare13("ld13"),
            e14 = prepare14("ld14"),
            e15 = prepare14("ld15"),


            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });



    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);


    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_5 = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            }
        ];

        var correct_connections_2_6 = [
            {
                "source": "ld2",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld2"
            }
        ];
        var correct_connections_3_7 = [
            {
                "source": "ld3",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld3"
            }
        ];
        var correct_connections_4_8 = [
            {
                "source": "ld4",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld4"
            }
        ];
        var correct_connections_14_9 = [
            {
                "source": "ld14",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld14"
            }
        ];
        var correct_connections_15_8 = [
            {
                "source": "ld15",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld15"
            }
        ];
        var correct_connections_10_12 = [
            {
                "source": "ld10",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld10"
            }
        ];
        var correct_connections_11_13 = [
            {
                "source": "ld11",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld11"
            }
        ];



        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld2"
            },
            {
                "source": "ld3",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld3"
            },
            {
                "source": "ld4",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld4"
            },
            {
                "source": "ld14",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld14"
            },
            {
                "source": "ld15",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld15"
            },
            {
                "source": "ld10",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld10"
            },
            {
                "source": "ld11",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld11"
            },



        ];
        var actual_connections = instance.getAllConnections();

        var is_connected_1_5 = false;
        var is_connected_2_6 = false;
        var is_connected_3_7 = false;
        var is_connected_4_8 = false;
        var is_connected_14_9 = false;
        var is_connected_15_8 = false;
        var is_connected_10_12 = false;
        var is_connected_11_13 = false;



        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_5) {
                is_connected_1_5 = correct_connections_1_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_2_6) {
                is_connected_2_6 = correct_connections_2_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_3_7) {
                is_connected_3_7 = correct_connections_3_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_4_8) {
                is_connected_4_8 = correct_connections_4_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_14_9) {
                is_connected_14_9 = correct_connections_14_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_15_8) {
                is_connected_15_8 = correct_connections_15_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_10_12) {
                is_connected_10_12 = correct_connections_10_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_11_13) {
                is_connected_11_13 = correct_connections_11_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });


        if (is_connected_1_5 && is_connected_2_6 && is_connected_3_7 && is_connected_4_8 && is_connected_14_9 && is_connected_15_8 && is_connected_10_12 && is_connected_11_13 && !unallowed_connection_present) {
            alert("Correct Connections");
            rightconnection = true;

            const elements = document.querySelectorAll('.jtk-endpoint');

            elements.forEach(ele => {
                ele.style.pointerEvents = 'none';
            });

            document.getElementById("mcbb").disabled = false;
            document.getElementById("mcbb").classList.remove("disabled");

            document.getElementById('dis1').style.pointerEvents = "none";
            document.getElementById('dis2').style.pointerEvents = "none";
            document.getElementById('dis3').style.pointerEvents = "none";
            document.getElementById('dis4').style.pointerEvents = "none";
            document.getElementById('dis5').style.pointerEvents = "none";
            document.getElementById('dis6').style.pointerEvents = "none";
            document.getElementById('dis7').style.pointerEvents = "none";
            document.getElementById('dis8').style.pointerEvents = "none";
            document.getElementById('dis9').style.pointerEvents = "none";
            document.getElementById('dis10').style.pointerEvents = "none";
            document.getElementById('dis11').style.pointerEvents = "none";
            document.getElementById('dis12').style.pointerEvents = "none";
            document.getElementById('dis13').style.pointerEvents = "none";
            document.getElementById('dis14').style.pointerEvents = "none";
            document.getElementById('dis15').style.pointerEvents = "none";

            return;
        }
        else if (!unallowed_connection_present) {
            alert("Please complete the connection");
        }
        else {
            alert("Wrong Connection");
            return;
        }
    });
});

//Scripting of mcb begins


var mcboffstate = true;
var were = 240;
function mcbonoff() {

    if (rightconnection == false) {
        alert("Alert ! Please Complete the connection first.");
    }
    else {
        if (mcboffstate == true) {

            mcboffstate = false;


            document.getElementById('select_1').disabled = false;
            document.getElementById('select_2').disabled = false;
            document.getElementById('select_3').disabled = false;
            document.getElementById('select_4').disabled = false;
            document.getElementById('select_5').disabled = false;

            document.getElementById('mcbb').src = "images/mcb2.png";
            document.getElementById('power').src = "images/push3.png";

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.00,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 5,
                });


            });

        }
    }
}

//Scripting of mcb ends

//Scripting of table begins
var op1 = document.getElementById("select_1");
var op2 = document.getElementById("select_2");
var op3 = document.getElementById("select_3");
var op4 = document.getElementById("select_4");
var op5 = document.getElementById("select_5");


var attcounter = 1;
var readings = true;
var current_readings = 0;

function addtotable() {
    if (mcboffstate == false) {

        if (current_readings != this.value) {
            current_readings = this.value;
            readings = true;
        }

        if (readings) {
            if (attcounter < 6) {
                if (op1.value == 2 && op2.value == 6 && op3.value == 7 && op4.value == 9 && op5.value == 22) {

                    var currentVal1 = attcounter++;
                    var currentVal2 = 20;
                    var currentVal3 = 200;
                    var currentVal4 = 100;
                    var currentVal5 = 10;
                    var currentVal6 = 0.019;


                    var tr = document.createElement('tr');
                    var td1 = tr.appendChild(document.createElement('td'));
                    var td2 = tr.appendChild(document.createElement('td'));
                    var td3 = tr.appendChild(document.createElement('td'));
                    var td4 = tr.appendChild(document.createElement('td'));
                    var td5 = tr.appendChild(document.createElement('td'));
                    var td6 = tr.appendChild(document.createElement('td'));


                    td1.innerHTML = currentVal1;
                    td2.innerHTML = currentVal2;
                    td3.innerHTML = currentVal3;
                    td4.innerHTML = currentVal4;
                    td5.innerHTML = currentVal5;
                    td6.innerHTML = currentVal6;


                    document.getElementById("tb1").appendChild(tr);
                    readings = false;
                    {
                        alert("RIGHT COMBINATION");
                        return;
                    }

                }
                else if (op1.value == 1 && op2.value == 6 && op3.value == 7 && op4.value == 8 && op5.value == 22) {

                    var currentVal1 = attcounter++;
                    var currentVal2 = 10;
                    var currentVal3 = 200;
                    var currentVal4 = 100;
                    var currentVal5 = 5;
                    var currentVal6 = 0.02;


                    var tr = document.createElement('tr');
                    var td1 = tr.appendChild(document.createElement('td'));
                    var td2 = tr.appendChild(document.createElement('td'));
                    var td3 = tr.appendChild(document.createElement('td'));
                    var td4 = tr.appendChild(document.createElement('td'));
                    var td5 = tr.appendChild(document.createElement('td'));
                    var td6 = tr.appendChild(document.createElement('td'));

                    td1.innerHTML = currentVal1;
                    td2.innerHTML = currentVal2;
                    td3.innerHTML = currentVal3;
                    td4.innerHTML = currentVal4;
                    td5.innerHTML = currentVal5;
                    td6.innerHTML = currentVal6;


                    document.getElementById("tb1").appendChild(tr);
                    readings = false;
                    {
                        alert("RIGHT COMBINATION");
                        return;
                    }
                }
                else if (op1.value == 3 && op2.value == 6 && op3.value == 7 && op4.value == 10 && op5.value == 22) {

                    var currentVal1 = attcounter++;
                    var currentVal2 = 30;
                    var currentVal3 = 200;
                    var currentVal4 = 100;
                    var currentVal5 = 15;
                    var currentVal6 = 0.02;


                    var tr = document.createElement('tr');
                    var td1 = tr.appendChild(document.createElement('td'));
                    var td2 = tr.appendChild(document.createElement('td'));
                    var td3 = tr.appendChild(document.createElement('td'));
                    var td4 = tr.appendChild(document.createElement('td'));
                    var td5 = tr.appendChild(document.createElement('td'));
                    var td6 = tr.appendChild(document.createElement('td'));


                    td1.innerHTML = currentVal1;
                    td2.innerHTML = currentVal2;
                    td3.innerHTML = currentVal3;
                    td4.innerHTML = currentVal4;
                    td5.innerHTML = currentVal5;
                    td6.innerHTML = currentVal6;


                    document.getElementById("tb1").appendChild(tr);
                    readings = false;
                    {
                        alert("RIGHT COMBINATION");
                        return;
                    }
                }
                else if (op1.value == 4 && op2.value == 6 && op3.value == 7 && op4.value == 11 && op5.value == 22) {

                    var currentVal1 = attcounter++;
                    var currentVal2 = 40;
                    var currentVal3 = 200;
                    var currentVal4 = 100;
                    var currentVal5 = 20;
                    var currentVal6 = 0.02;


                    var tr = document.createElement('tr');
                    var td1 = tr.appendChild(document.createElement('td'));
                    var td2 = tr.appendChild(document.createElement('td'));
                    var td3 = tr.appendChild(document.createElement('td'));
                    var td4 = tr.appendChild(document.createElement('td'));
                    var td5 = tr.appendChild(document.createElement('td'));
                    var td6 = tr.appendChild(document.createElement('td'));

                    td1.innerHTML = currentVal1;
                    td2.innerHTML = currentVal2;
                    td3.innerHTML = currentVal3;
                    td4.innerHTML = currentVal4;
                    td5.innerHTML = currentVal5;
                    td6.innerHTML = currentVal6;


                    document.getElementById("tb1").appendChild(tr);
                    readings = false;
                    {
                        alert("RIGHT COMBINATION");
                        return;
                    }
                }
                else if (op1.value == 5 && op2.value == 6 && op3.value == 7 && op4.value == 12 && op5.value == 22) {

                    var currentVal1 = attcounter++;
                    var currentVal2 = 50;
                    var currentVal3 = 200;
                    var currentVal4 = 100;
                    var currentVal5 = 25;
                    var currentVal6 = 0.019;

                    var tr = document.createElement('tr');
                    var td1 = tr.appendChild(document.createElement('td'));
                    var td2 = tr.appendChild(document.createElement('td'));
                    var td3 = tr.appendChild(document.createElement('td'));
                    var td4 = tr.appendChild(document.createElement('td'));
                    var td5 = tr.appendChild(document.createElement('td'));
                    var td6 = tr.appendChild(document.createElement('td'));


                    td1.innerHTML = currentVal1;
                    td2.innerHTML = currentVal2;
                    td3.innerHTML = currentVal3;
                    td4.innerHTML = currentVal4;
                    td5.innerHTML = currentVal5;
                    td6.innerHTML = currentVal6;

                    document.getElementById("tb1").appendChild(tr);
                    readings = false;
                    {
                        alert("RIGHT COMBINATION");
                        return;
                    }

                }

                else {
                    alert("WRONG COMBINATION");
                    return;

                }
            }
        
        else {
            alert("You can add only five readings in the table.")
        }
    }

    }
}


var m = document.getElementById("select_5");
var strUser = m.options[m.selectedIndex].value;
var value = 0;
m.onchange = function () {
    value = this.value;

    if (this.value == 21) {
        range946();
    }

    if (this.value == 22) {
        range947();
    }

};


var a = document.getElementById("select_1");
var strUser = a.options[a.selectedIndex].value;
var value = 0;
a.onchange = function () {
    value = this.value;

    if (this.value == 1) {
        range911();

        if (op1.value == 1 && op4.value == 8 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.01,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }

    if (this.value == 1) {
        range911();

        if (op1.value == 1 && op4.value == 9 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.24,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }
    if (this.value == 1) {
        range911();

        if (op1.value == 1 && op4.value == 10 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.35,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }
    if (this.value == 1) {
        range911();

        if (op1.value == 1 && op4.value == 11 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.39,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }
    if (this.value == 1) {
        range911();

        if (op1.value == 1 && op4.value == 12 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.44,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }
    if (this.value == 2) {
        range912();

        if (op1.value == 2 && op4.value == 8 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.24,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }

    if (this.value == 2 && op1.value == 2 && op4.value == 9 && op5.value == 22) {
        range912();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.01,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 8
            });

        });
    }

    if (this.value == 2 && op1.value == 2 && op4.value == 10 && op5.value == 22) {
        range912();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.11,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 2 && op1.value == 2 && op4.value == 11 && op5.value == 22) {
        range912();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.18,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 2 && op1.value == 2 && op4.value == 12 && op5.value == 22) {
        range912();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.21,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });


        });
    }
    if (this.value == 3) {
        range913();

        if (op1.value == 3 && op4.value == 8 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.35,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 5
                });

            });
        }
    }

    if (this.value == 3 && op1.value == 3 && op4.value == 9 && op5.value == 22) {
        range913();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.11,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 3 && op1.value == 3 && op4.value == 10 && op5.value == 22) {
        range913();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.01,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 3 && op1.value == 3 && op4.value == 11 && op5.value == 22) {
        range913();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.06,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 3 && op1.value == 3 && op4.value == 12 && op5.value == 22) {
        range913();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.12,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 4) {
        range914();

        if (op1.value == 4 && op4.value == 8 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.39,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 5
                });

            });
        }
    }
    if (this.value == 4 && op1.value == 4 && op4.value == 9 && op5.value == 22) {
        range914();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.18,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 4 && op1.value == 4 && op4.value == 10 && op5.value == 22) {
        range914();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.06,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 4 && op1.value == 4 && op4.value == 11 && op5.value == 22) {
        range914();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.01,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 4 && op1.value == 4 && op4.value == 12 && op5.value == 22) {
        range914();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.04,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 5) {
        range915();

        if (op1.value == 5 && op4.value == 8 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.43,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 5
                });

            });
        }
    }

    if (this.value == 5 && op1.value == 5 && op4.value == 9 && op5.value == 22) {
        range915();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.21,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 5 && op1.value == 5 && op4.value == 10 && op5.value == 22) {
        range915();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.12,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 5 && op1.value == 5 && op4.value == 11 && op5.value == 22) {
        range915();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.04,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 5 && op1.value == 5 && op4.value == 12 && op5.value == 22) {
        range915();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.01,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

};


var b = document.getElementById("select_4");
var strUser = b.options[b.selectedIndex].value;
var value = 0;
b.onchange = function () {
    value = this.value;

    if (this.value == 8) {
        range941();

        if (op1.value == 1 && op4.value == 8 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.01,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }

    else if (this.value == 9) {
        range942();

        if (op1.value == 1 && op4.value == 9 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.24,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }

    else if (this.value == 10) {
        range943();

        if (op1.value == 1 && op4.value == 10 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.35,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }

    else if (this.value == 11) {
        range944();

        if (op1.value == 1 && op4.value == 11 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.39,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }

    else if (this.value == 12) {
        range945();

        if (op1.value == 1 && op4.value == 12 && op5.value == 22) {

            $(function () {

                $("#testArray1").sevenSeg({
                    digits: 3,
                    value: 0.44,
                    colorOff: "#003200",
                    colorOn: "Lime",
                    slant: 8
                });

            });
        }
    }

    if (this.value == 8 && op1.value == 2 && op4.value == 8 && op5.value == 22) {
        range941();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.24,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 8
            });

        });
    }

    if (this.value == 9 && op1.value == 2 && op4.value == 9 && op5.value == 22) {
        range942();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.01,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 8
            });

        });
    }

    if (this.value == 10 && op1.value == 2 && op4.value == 10 && op5.value == 22) {
        range943();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.11,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 11 && op1.value == 2 && op4.value == 11 && op5.value == 22) {
        range944();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.18,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 12 && op1.value == 2 && op4.value == 12 && op5.value == 22) {
        range945();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.21,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 8 && op1.value == 3 && op4.value == 8 && op5.value == 22) {
        range941();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.35,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 9 && op1.value == 3 && op4.value == 9 && op5.value == 22) {
        range942();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.11,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 10 && op1.value == 3 && op4.value == 10 && op5.value == 22) {
        range943();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.01,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 11 && op1.value == 3 && op4.value == 11 && op5.value == 22) {
        range944();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.06,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 12 && op1.value == 3 && op4.value == 12 && op5.value == 22) {
        range945();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.12,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 8 && op1.value == 4 && op4.value == 8 && op5.value == 22) {
        range941();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.39,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 9 && op1.value == 4 && op4.value == 9 && op5.value == 22) {
        range942();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.18,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 10 && op1.value == 4 && op4.value == 10 && op5.value == 22) {
        range943();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.06,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 11 && op1.value == 4 && op4.value == 11 && op5.value == 22) {
        range944();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.01,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 12 && op1.value == 4 && op4.value == 12 && op5.value == 22) {
        range945();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.04,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 8 && op1.value == 5 && op4.value == 8 && op5.value == 22) {
        range941();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.43,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 9 && op1.value == 5 && op4.value == 9 && op5.value == 22) {
        range942();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.21,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }

    if (this.value == 10 && op1.value == 5 && op4.value == 10 && op5.value == 22) {
        range943();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.12,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 11 && op1.value == 5 && op4.value == 11 && op5.value == 22) {
        range944();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.04,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
    if (this.value == 12 && op1.value == 5 && op4.value == 12 && op5.value == 22) {
        range945();

        $(function () {

            $("#testArray1").sevenSeg({
                digits: 3,
                value: 0.01,
                colorOff: "#003200",
                colorOn: "Lime",
                slant: 5
            });

        });
    }
};




var range91 = document.querySelector('#knob1');
var range92 = document.querySelector('#knob2');
var range93 = document.querySelector('#knob3');
var range95 = document.querySelector('#knob5');
var range96 = document.querySelector('#knob6');

function range911() {
    range91.style.transform = 'rotate(88deg)';

}
function range912() {
    range91.style.transform = 'rotate(118deg)';

}
function range913() {
    range91.style.transform = 'rotate(147deg)';

}
function range914() {
    range91.style.transform = 'rotate(179deg)';

}
function range915() {
    range91.style.transform = 'rotate(208deg)';

}

range92.style.transform = 'rotate(180deg)';
range93.style.transform = 'rotate(118deg)';


function range941() {

    range95.style.transform = 'rotate(57deg)';
}
function range942() {

    range95.style.transform = 'rotate(88deg)';
}
function range943() {

    range95.style.transform = 'rotate(118deg)';
}
function range944() {

    range95.style.transform = 'rotate(148deg)';
}
function range945() {

    range95.style.transform = 'rotate(179deg)';
}
function range946() {

    range96.style.transform = 'rotate(56deg)';
}
function range947() {

    range96.style.transform = 'rotate(301deg)';
}


// function sound()
// {
//  let oscillator = audioCtx.createOscillator();


// oscillator.frequency.value = 100;
// setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1/12), 1000);
// setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1/12), 2000);

// oscillator.connect(audioCtx.destination);
// oscillator.start();
// oscillator.stop(audioCtx.currentTime + 3);
// }