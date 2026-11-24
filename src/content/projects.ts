export type ProjectStatus = "Built product" | "Work in progress";

export interface ProjectSummary {
  name: string;
  slug: string;
  status: ProjectStatus;
  kind: string;
  summary: string;
}

/**
 * Verified high-level summaries only. Add detailed case-study fields when
 * project documentation is supplied; keep presentation separate from content.
 */
export const projects: ProjectSummary[] = [
  {
    name: "Open-Pane",
    slug: "open-pane",
    status: "Built product",
    kind: "DESKTOP / CROSS-PLATFORM",
    summary: "A consent-gated, cross-platform screen-sharing desktop application.",
  },
  {
    name: "Interview-Pilot-AI",
    slug: "interview-pilot-ai",
    status: "Built product",
    kind: "AI-POWERED APPLICATION",
    summary: "An AI-powered application providing live guidance during interviews.",
  },
  {
    name: "AgentOps MCP",
    slug: "agentops-mcp",
    status: "Built product",
    kind: "MCP / AGENT EVALUATION",
    summary: "An MCP-based tool for evaluating AI agents, tool calls, and execution behavior.",
  },
  {
    name: "Real-Time Voice Conversion",
    slug: "real-time-voice-conversion",
    status: "Work in progress",
    kind: "EXPLORATION",
    summary: "An exploration of real-time voice conversion technology.",
  },
];
