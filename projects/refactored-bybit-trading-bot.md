<h1 class="text-4xl font-bold mb-8">Refactored Bybit Trading Bot with Real-Time Data Processing</h1>
<div class="project-container">
    <div class="role-tech-container">
        <div class="role-container">
            <span class="role-label">My Role:</span>
            <span class="role-text">Full-stack Developer</span>
        </div>
        <div class="role-container">
            <span class="role-label">Date:</span>
            <span class="role-text">05/2025</span>
        </div>
        <div class="tech-container">
            <span class="tech-label">Technologies:</span>
            <div class="tech-list">
                <span class="tech-badge">Python</span>
                <span class="tech-badge">FastAPI</span>
                <span class="tech-badge">PostgreSQL</span>
                <span class="tech-badge">asyncpg</span>
                <span class="tech-badge">ccxt</span>
                <span class="tech-badge">WebSockets</span>
                <span class="tech-badge">React</span>
                <span class="tech-badge">Vite</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">Zustand</span>
                <span class="tech-badge">TanStack Query</span>
                <span class="tech-badge">Mantine UI</span>
                <span class="tech-badge">Pydantic</span>
                <span class="tech-badge">JWT</span>
                <span class="tech-badge">Docker</span>
            </div>
        </div>
    </div>
    <p class="project-description">
        Led the refactoring of a Bybit crypto trading bot to enhance robustness, reliability, accuracy, and performance. The project focused on persistent state management, low-latency trade execution, and accurate SL/TP management by leveraging real-time data from Bybit's V5 API and WebSockets. The backend was rebuilt with FastAPI and PostgreSQL, and the frontend with React/Vite.
    </p>
    <h2 class="section-heading">Key Contributions & Impact</h2>
    <ul>
        <li>
            <strong>Architecture Redesign:</strong> Designed a new target architecture focusing on asynchronous operations, persistent state management in PostgreSQL, and real-time data processing via WebSockets to eliminate state loss and improve reliability.
        </li>
        <li>
            <strong>Backend Development (FastAPI):</strong> Developed the core backend using FastAPI, including API services for authentication, settings, webhook signal ingestion, and the main TradingService for managing active positions and interacting with the Bybit exchange.
        </li>
        <li>
            <strong>Real-Time Data Integration (Bybit WebSockets):</strong> Implemented websocket client to manage persistent connections to Bybit's public (tickers) and private (position, execution) WebSocket streams, enabling real-time SL/TP checks and position synchronization.
        </li>
        <li>
            <strong>Persistent State Management:</strong> Shifted from in-memory state to PostgreSQL for storing active trade positions, SL/TP levels, and other critical data, ensuring crash recovery and data integrity.
        </li>
        <li>
            <strong>Low-Latency Trade Execution:</strong> Utilized library with Bybit REST API interactions for order placement and integrated real-time WebSocket data to trigger SL/TP market close orders promptly.
        </li>
        <li>
            <strong>Data Flow Design:</strong> Defined and implemented robust data flows for new trade signals, real-time SL/TP checks, order reversals, and dashboard updates, ensuring clear process sequences and component interactions.
        </li>
        <li>
            <strong>API & WebSocket Contract Definition:</strong> Established clear API endpoint contracts and WebSocket message structures for backend-frontend communication, ensuring efficient and reliable data exchange for dashboard updates and trading actions.
        </li>
        <li>
            <strong>Frontend Architecture (React/Vite):</strong> Proposed and guided the frontend refactor using React with Vite, TypeScript, Zustand for global state, TanStack Query for server state, and Mantine UI for components.
        </li>
    </ul>
    <h2 class="section-heading">Challenges & Solutions</h2>
    <ul>
        <li>
            <div class="challenge-solution">
                <strong>Eliminating State Loss & Ensuring Data Integrity:</strong> The previous system suffered from state loss on restarts due to in-memory position management.
                <span class="solution">
                    <strong>Solution:</strong> Implemented persistent state management using PostgreSQL for all active positions and critical trading data. Utilized database transactions for atomic updates, ensuring data consistency and enabling crash recovery.
                </span>
            </div>
        </li>
        <li>
            <div class="challenge-solution">
                <strong>Achieving Accurate and Low-Latency SL/TP Execution:</strong> Previous reliance on REST-only polling led to delays in SL/TP execution.
                <span class="solution">
                    <strong>Solution:</strong> Integrated Bybit's real-time WebSocket streams to monitor prices and position updates continuously. This allowed the `TradingService` to trigger SL/TP market close orders with significantly lower latency.
                </span>
            </div>
        </li>
        <li>
            <div class="challenge-solution">
                <strong>Managing Real-time WebSocket Connections and Data:</strong> Ensuring stable WebSocket connections to Bybit and efficiently processing the incoming stream of data.
                <span class="solution">
                    <strong>Solution:</strong> Developed a dedicated websocket client with robust auto-reconnection logic and efficient parsing/forwarding of messages to the trading service for immediate action or state updates.
                </span>
            </div>
        </li>
    </ul>
    <h2 class="section-heading">Lessons Learned</h2>
    <ul>
        <li>
            The critical importance of persistent state management over in-memory solutions for financial applications requiring high reliability.
        </li>
        <li>
            Leveraging real-time WebSocket data streams is paramount for performance-sensitive trading operations like SL/TP execution.
        </li>
        <li>
            Designing clear API and data flow contracts significantly improves system integration and maintainability.
        </li>
        <li>
            Asynchronous programming patterns (FastAPI, asyncio, asyncpg) are essential for building scalable and responsive trading bot backends.
        </li>
    </ul>
</div>