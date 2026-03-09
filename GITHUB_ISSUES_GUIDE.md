# GitHub Issues & Milestones Tracking Guide for AI Agents

## Purpose
This document serves as the standard operating procedure (SOP) for the AI development agent. To maintain rigorous project management, the AI agent must adhere to these rules whenever starting a new conversation, context, or development session. This ensures seamless project tracking, transparency, and organized milestones using GitHub.

---

## 1. Context Gathering (Pre-Flight Check)
Every time a new chat or session starts, the AI agent must check the current state of tracking:
*   **Check Open Issues:** Use the GitHub MCP tools to list current open issues (`mcp_github-mcp-server_list_issues`). Does the user's request align with an existing issue?
*   **Review Active Milestones:** Identify the current active milestone to understand the broader context and priorities.

## 2. Issue Management & Creation
No work should be done without an associated ticket.
*   **Create Tracking Issues:** If the user requests a new feature, bug fix, or visual update that does not have an existing issue, **create one immediately** using `mcp_github-mcp-server_issue_write`.
*   **Required Issue Fields:**
    *   **Title:** Clear, concise, and action-oriented (e.g., "Implement Hero Section Animations").
    *   **Body:** A detailed breakdown of the task, including context, acceptance criteria, and a markdown checklist `[ ]` representing sub-tasks.
    *   **Milestone:** Always assign the issue to the relevant active milestone.
    *   **Labels:** Apply appropriate labels (e.g., `enhancement`, `bug`, `ui/ux`, `documentation`).

## 3. Ongoing Progress Updates
Keep the issue alive and updated as work progresses.
*   **Comment on Progress:** When completing a significant chunk of work or updating the local `task.md`, leave a concise progress comment on the corresponding GitHub issue using `mcp_github-mcp-server_add_issue_comment`.
*   **Log Blockers:** If blocked by a technical issue or waiting on a user decision, document the blocker as a comment on the issue before notifying the user.
*   **Commit Linkage:** Ensure any commits or Pull Requests explicitly reference the issue number (e.g., "Fixes #5", "Closes #12", "Relates to #8").

## 4. Verification and Issue Closure
*   **Acceptance Criteria Check:** Before closing an issue, cross-reference the completed work against the initial requirements in the issue body. Ensure visual verification and testing are complete if applicable.
*   **Graceful Closure:** Once verified, close the issue and leave a final summary comment outlining what was accomplished.
*   **Milestone Tracking:** If this is the final issue in a milestone, notify the user that the milestone is complete.

---

## 🤖 Core AI Agent Directives
1.  **Discipline Over Speed:** Do not bypass issue creation for "quick fixes." Every meaningful codebase change must have a traceable issue.
2.  **Single Source of Truth:** GitHub Issues and Milestones represent the project's state. Keep them synchronized with local implementation plans and `task.md`.
3.  **Proactive Organization:** Do not wait for the user to ask for an issue to be created. If work is starting, an issue must exist.
