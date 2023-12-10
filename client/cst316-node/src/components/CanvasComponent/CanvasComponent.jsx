import React, { useState, useRef, useEffect } from "react";
import "./canvasComponent.css";

const CanvasComponent = () => {
    const canvasRef = useRef(null); // reference to the canvas element
    const [node, setNode] = useState(null); // node object
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 }); // popup position (under the node)
    const [canvasSize, setCanvasSize] = useState({ width: 1200, height: 700 }); // canvas size
    const [showPopup, setShowPopup] = useState(false); // show popup or not (when hovering over the node)
    const [structureData, setStructureData] = useState(null); // data structure data

    useEffect(() => {
        // set canvas size based on the window size
        const checkSize = () => {
            if (window.innerWidth < 590) {
                setCanvasSize({ width: 200, height: 700 });
            } else if (window.innerWidth < 770) {
                setCanvasSize({ width: 300, height: 700 });
            } else if (window.innerWidth < 995) {
                setCanvasSize({ width: 400, height: 700 });
            } else if (window.innerWidth < 1180) {
                setCanvasSize({ width: 600, height: 700 });
            } else if (window.innerWidth < 1400) {
                setCanvasSize({ width: 800, height: 700 });
            } else if (window.innerWidth < 1610) {
                setCanvasSize({ width: 1000, height: 700 });
            } else {
                setCanvasSize({ width: 1200, height: 700 });
            }
        };

        checkSize();

        window.addEventListener("resize", checkSize);

        const fetchData = async () => {
            const response = await fetch("http://localhost:5022/api/Objects");
            const data = await response.json();
            setStructureData(data);
        };
        fetchData();

        return () => window.removeEventListener("resize", checkSize);
    }, []);

    // create a node object
    const createNode = (x, y) => {
        return { x: x, y: y, size: 50 };
    };

    // check if the mouse is inside the node
    const isInsideNode = (x, y, node) => {
        return (
            x > node.x &&
            x < node.x + node.size &&
            y > node.y &&
            y < node.y + node.size
        );
    };

    // update popup position (under the node)
    const updatePopupPosition = (node) => {
        setPopupPosition({
            top: (node.y + 175),
            left: node.x + (150 + node.size),
        });
    };

    // handle click event on the canvas (create a node or remove a node)
    // show popup if the mouse is inside the node
    // if node hasn't been created, create a node
    // if node has been created, remove the node
    const handleClick = (event) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (node && isInsideNode(x, y, node)) {
            setNode(null);
            setShowPopup(false);
        } else if (!node) {
            const newNode = createNode(x, y);
            setNode(newNode);
            setShowPopup(true);
            updatePopupPosition(newNode);
        }
    };

    // set showPopup to true if the mouse is inside the node
    const setNodePopup = (insideNode) => {
        setShowPopup(insideNode);
    };

    // handle mouse move event on the canvas (show popup if the mouse is inside the node)
    const handleMouseMove = (event) => {
        if (!node) {
            return;
        }

        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setNodePopup(isInsideNode(x, y, node));
    };

    // draw the node on the canvas (and the popup if the mouse is inside the node)
    // also draw a line to the right of the node to represent the pointer to the next node
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (node) {
            context.fillStyle = "#6c757d";
            context.fillRect(node.x, node.y, node.size, node.size);
            // add line to the right of the node
            context.beginPath();
            context.moveTo(node.x + node.size, node.y + node.size / 2);
            context.lineTo(node.x + node.size + 25, node.y + node.size / 2);
            context.stroke();

            // put text in the middle of the node square
            context.font = "15px Arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(
                "Node",
                node.x + node.size / 2,
                node.y + node.size / 2
            );
        }
    }, [node]);

    // render the canvas and the popup (if the mouse is inside the node)
    return (
        <>
            <canvas
                ref={canvasRef}
                width={canvasSize.width}
                height={canvasSize.height}
                style={{
                    border: "2px solid black",
                    borderRadius: "10px",
                }}
                onClick={handleClick}
                onMouseMove={handleMouseMove}
            />
            {showPopup && (
                <div
                    style={{
                        position: "absolute",
                        top: `${popupPosition.top}px`,
                        left: `${popupPosition.left}px`,
                        zIndex: 100,
                    }}
                    className="popup"
                >
                    <p>{structureData[0].StructureDescription}</p>
                </div>
            )}
        </>
    );
};
export default CanvasComponent;
