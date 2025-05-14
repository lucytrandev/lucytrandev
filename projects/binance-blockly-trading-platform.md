<h1 class="text-4xl font-bold mb-8">Custom Trading Bot Platform (Blockly, Binance)</h1>
<div class="project-container">
    <div class="role-tech-container">
        <div class="role-container">
            <span class="role-label">My Role:</span>
            <span class="role-text">Lead Developer, Full-stack Dev</span>
        </div>
        <div class="role-container">
            <span class="role-label">Date:</span>
            <span class="role-text">04/2025-05/2025</span>
        </div>
        <div class="tech-container">
            <span class="tech-label">Technologies:</span>
            <div class="tech-list">
                <span class="tech-badge">Python</span>
                <span class="tech-badge">FastAPI</span>
                <span class="tech-badge">React</span>
                <span class="tech-badge">Vite</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">PostgreSQL</span>
                <span class="tech-badge">asyncpg</span>
                <span class="tech-badge">Blockly</span>
                <span class="tech-badge">Zustand</span>
                <span class="tech-badge">TanStack Query</span>
                <span class="tech-badge">Mantine UI</span>
                <span class="tech-badge">ccxt</span>
                <span class="tech-badge">WebSockets</span>
                <span class="tech-badge">JWT</span>
                <span class="tech-badge">Netlify</span>
                <span class="tech-badge">Railway</span>
            </div>
        </div>
    </div>
    <p class="project-description">
        Developed a custom trading bot platform with a Blockly-based visual strategy editor. The platform features a robust backend using FastAPI (Python) for handling business logic, data processing, and real-time exchange interaction with Binance via REST APIs and WebSocket streams. The frontend, built with React and Vite, allows users to create, manage, and monitor trading strategies.
    </p>
    <img src="/images/binance-blockly-demo.png" alt="Binance Blockly Platform Interface" />
    <h2 class="section-heading">Key Contributions & Impact</h2>
    <ul>
        <li>
            <strong>Full-Stack Architecture Design:</strong> Designed and implemented a comprehensive architecture with a React frontend, FastAPI backend, and PostgreSQL database, ensuring scalability and real-time performance.
        </li>
        <li>
            <strong>Backend Development (FastAPI):</strong> Built the core backend services including API layers, authentication (JWT, OAuth), strategy management, and an asynchronous execution engine for running trading strategies.
        </li>
        <li>
            <strong>Real-Time Execution Engine:</strong> Developed an event-driven execution engine, processing real-time market data from Binance via WebSockets to trigger strategy logic.
        </li>
        <li>
            <strong>Exchange Integration (Binance):</strong> Integrated with Binance USDⓈ-M Futures API for order placement, position management (including Hedge Mode), and account information retrieval.
        </li>
        <li>
            <strong>WebSocket Management:</strong> Implemented a robust WebSocket manager for persistent connections to Binance, handling subscriptions and dispatching real-time events to strategy tasks.
        </li>
        <li>
            <strong>Frontend User Interface (React & Blockly):</strong> Developed the frontend UI using React, Vite, TypeScript, and Mantine UI, featuring a Blockly interface for visual strategy creation, along with state management using Zustand and server state management with TanStack Query.
        </li>
        <li>
            <strong>Secure API Key Management:</strong> Implemented secure, encrypted storage for user API keys.
        </li>
        <li>
            <strong>Position Management:</strong> Designed and implemented logic for reliable tracking and management of user positions, supporting Binance Hedge Mode and relying on Binance as the source of truth for aggregated position details.
        </li>
    </ul>
    <h2 class="section-heading">Challenges & Solutions</h2>
    <ul>
        <li>
            <div class="challenge-solution">
                <strong>Ensuring Real-Time Responsiveness:</strong> Processing and reacting to high-frequency market data and user actions in near real-time.
                <span class="solution">
                    <strong>Solution:</strong> Leveraged FastAPI asynchronous capabilities with libraries for concurrent strategy execution, and an event-driven architecture based on WebSocket streams, and non-blocking database operations.
                </span>
            </div>
        </li>
        <li>
            <div class="challenge-solution">
                <strong>Maintaining System Resilience:</strong> Handling potential disruptions like API errors, WebSocket disconnections, or database issues without compromising active strategies or data integrity.
                <span class="solution">
                    <strong>Solution:</strong> Implemented intelligent retries with exponential backoff for API calls, automatic reconnection logic for WebSockets, and isolated strategy tasks to prevent single failures from crashing the engine. Ensured robust error logging and status reporting.
                </span>
            </div>
        </li>
         <li>
            <div class="challenge-solution">
                <strong>Managing Complex State:</strong> Synchronizing strategy state, user positions, and account information between the platform and the exchange.
                <span class="solution">
                    <strong>Solution:</strong> Relied on Binance as the source of truth for critical data like position details, with periodic reconciliation. Employed client-side state management (Zustand) and server-state caching (TanStack Query) on the frontend.
                </span>
            </div>
        </li>
    </ul>
    <h2 class="section-heading">Lessons Learned</h2>
    <ul>
        <li>
            Deepened understanding of designing and implementing complex, real-time, event-driven systems for financial applications.
        </li>
        <li>
            Gained extensive experience with asynchronous programming in Python (FastAPI, asyncio) and its importance for I/O-bound applications.
        </li>
        <li>
            Learned the intricacies of integrating with cryptocurrency exchange APIs (Binance) for both RESTful commands and continuous WebSocket data streams.
        </li>
        <li>
            Reinforced the importance of robust error handling, fault tolerance, and comprehensive logging in distributed systems.
        </li>
    </ul>
</div>