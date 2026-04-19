this is the project to design the the website a static website for unity tutorial 
Day - 1
Here’s a **Day 1 (1-hour) beginner-friendly plan for Unity** — structured, guided, and with homework so you actually *learn by doing*, not just watching.

---

# 🎮 Day 1 – Unity Basics (1 Hour)

## ⏱️ Total Time: 60 Minutes

---

## 🔹 0–10 min: What is Unity? (Foundation)

### ✅ Goal:

Understand *what Unity is and why we use it*

### 🧠 Key Concepts:

* **Unity** = Game Engine (used to build games, apps, simulations)
* Supports:

  * 2D & 3D games
  * Mobile, PC, Console
* Uses **C#**

### 💡 Simple Understanding:

Unity = Editor + Engine + Physics + Rendering + Scripting

---

## 🔹 10–25 min: Unity Interface (VERY IMPORTANT)

### ✅ Goal:

Get comfortable with Unity windows (you’ll use these daily)

### 🧩 Core Windows:

1. **Scene View**

   * Where you *design your game world*

2. **Game View**

   * What the player actually sees

3. **Hierarchy**

   * List of all objects in the scene

4. **Inspector**

   * Modify selected object properties

5. **Project Window**

   * All assets (scripts, images, models)

6. **Console**

   * Errors, logs, debug messages

---

### 💡 Analogy:

* Hierarchy = Tree structure
* Inspector = Settings panel
* Scene = Workspace
* Game = Final output

---

## 🔹 25–40 min: GameObjects & Components

### ✅ Goal:

Understand Unity’s core concept

### 🧠 Key Idea:

👉 Everything in Unity = **GameObject + Components**

---

### 🧱 GameObject:

* Empty container (like a box)

### 🔧 Components:

Add functionality:

* Transform (position, rotation, scale)
* Sprite Renderer (visual)
* Rigidbody (physics)
* Collider (collision)

---

### 💡 Example:

A Player:

* GameObject = Player
* Components:

  * Transform
  * Sprite Renderer
  * Rigidbody2D
  * BoxCollider2D

---

## 🔹 40–50 min: Your First Action (Hands-On)

### 🎯 Task:

Create your first object

### 🪜 Steps:

1. Open Unity → New Project (2D)
2. Right-click in Hierarchy → Create Empty
3. Rename → `Player`
4. Add Components:

   * Sprite Renderer
   * Box Collider 2D
5. Change position in Inspector

---

### 🎉 Result:

You created your **first game object**

---

## 🔹 50–60 min: Intro to C# Script

### ✅ Goal:

Understand scripting basics

---

### 🪜 Steps:

1. Right-click → Create → C# Script → `PlayerMovement`
2. Double-click → open in **Visual Studio Code**

---

### ✍️ Basic Script:

```csharp
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Game Started");
    }

    void Update()
    {
        Debug.Log("Running...");
    }
}
```

---

### 🧠 Key Concepts:

* `Start()` → runs once
* `Update()` → runs every frame

---

### 🎯 Final Step:

* Drag script → Player object

---

# 🧪 Homework (IMPORTANT)

## ✅ Task 1:

Create:

* Player object
* Add:

  * Sprite
  * Collider
  * Rigidbody2D

---

## ✅ Task 2:

Modify Script:

```csharp
void Update()
{
    transform.Translate(Vector3.right * Time.deltaTime);
}
```

👉 Observe:

* Object moves automatically

---

## ✅ Task 3 (Thinking Question):

Answer these:

1. What is a GameObject?
2. What is a Component?
3. Difference between Scene and Game view?
4. When does Update run?

---

## 🔥 Bonus Challenge:

* Add 2 more objects (Enemy, Ground)
* Change colors or positions

---

# 🚀 End Goal of Day 1

By end of today, you should:

* Understand Unity interface
* Know GameObjects & Components
* Run your first script
* Move an object

eg: code balance the player on plane

---
