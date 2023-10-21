import React from "react"
import { createRoot } from "react-dom/client"

import "./styles/style.css"

import Notes from "./modules/notes"

const root = createRoot(document.getElementById("root"))
root.render(<Notes />)
