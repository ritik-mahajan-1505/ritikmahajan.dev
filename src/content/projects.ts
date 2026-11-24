export type ProjectStatus = "Built product" | "Work in progress";
export interface ProjectDraftSection { heading: string; copy: string; }
export interface ProjectSummary {
  name: string; slug: string; status: ProjectStatus; kind: string; summary: string;
  positioning: string; draftSections: ProjectDraftSection[]; detailsToConfirm: string[];
}

/**
 * Names, short descriptions and statuses reflect supplied project information.
 * Longer narrative is provisional editorial scaffolding, not verified product documentation.
 */
export const projects: ProjectSummary[] = [
  {
    name: "Open-Pane", slug: "open-pane", status: "Built product", kind: "DESKTOP / CROSS-PLATFORM",
    summary: "A consent-gated, cross-platform screen-sharing desktop application.",
    positioning: "A screen-sharing experience where permission is part of the product, not an afterthought.",
    draftSections: [
      { heading: "The product premise", copy: "Open-Pane is a cross-platform desktop application for screen sharing, with consent at the centre of the experience. This draft frames the project around a simple expectation: sharing a screen should be an intentional action, with the person sharing retaining a clear say in when that access is granted." },
      { heading: "The product question", copy: "The interesting design and engineering space is the boundary between a useful screen-sharing workflow and the trust required to make it appropriate. The final case study should explain how consent is requested, communicated and respected, using only the actual behavior implemented in the product." },
      { heading: "What the case study should show", copy: "A finished story could walk through the user problem, the cross-platform constraints, the consent experience, and the engineering decisions behind a reliable desktop application. Those details are intentionally open until the implementation and your contribution are documented." }
    ],
    detailsToConfirm: ["Supported operating systems and frameworks", "Exact consent and permission flow", "Your role and key implementation decisions", "Screenshots, demo or repository link", "Known constraints and lessons learned"]
  },
  {
    name: "Interview-Pilot-AI", slug: "interview-pilot-ai", status: "Built product", kind: "AI-POWERED APPLICATION",
    summary: "An AI-powered application providing live guidance during interviews.",
    positioning: "An AI-assisted interview experience focused on timely guidance while a conversation is happening.",
    draftSections: [
      { heading: "The product premise", copy: "Interview-Pilot-AI is described as an AI-powered application that provides live guidance during interviews. This provisional framing focuses on the challenge of making assistance useful in a time-sensitive conversation, where relevance and timing matter as much as the generated response." },
      { heading: "The product question", copy: "A useful case study should explain who the guidance is designed for, what information the system uses, and how suggestions reach the user during an interview. The current description does not specify these mechanics, so this page avoids assuming a particular interface, model workflow or interview format." },
      { heading: "What the case study should show", copy: "The eventual story can document the end-to-end interaction, how AI output is made useful in context, and the trade-offs involved in responsiveness and reliability. Concrete examples, supported capabilities and technical choices should replace this draft once you provide them." }
    ],
    detailsToConfirm: ["Intended user and interview scenarios", "What live guidance includes and how it appears", "AI/model workflow and integrations", "Your role, safeguards and design decisions", "Screenshots, demo or repository link"]
  },
  {
    name: "AgentOps MCP", slug: "agentops-mcp", status: "Built product", kind: "MCP / AGENT EVALUATION",
    summary: "An MCP-based tool for evaluating AI agents, tool calls, and execution behavior.",
    positioning: "A closer look at how AI agents behave across tool calls and execution—not just at their final answer.",
    draftSections: [
      { heading: "The product premise", copy: "AgentOps MCP is an MCP-based tool for evaluating AI agents, tool calls and execution behavior. The provisional story positions it around observability and evaluation: understanding the steps an agent takes can be important when assessing whether its behavior is useful and dependable." },
      { heading: "The product question", copy: "Agent evaluation involves more than checking a final response. This project description points toward examining tool interactions and execution behavior, but the exact evaluation methods, captured signals and reporting capabilities have not yet been supplied. They should be documented from the actual implementation rather than inferred." },
      { heading: "What the case study should show", copy: "The final page should make the MCP integration understandable, show a representative evaluation flow, and explain what the tool helps a developer inspect. Specific protocol details, supported runtimes, metrics and example results belong here only after they are confirmed." }
    ],
    detailsToConfirm: ["MCP server/client architecture and supported hosts", "What agent and tool-call data is captured", "Evaluation workflow and outputs", "Your role and implementation details", "Example trace, screenshots or repository link"]
  },
  {
    name: "Real-Time Voice Conversion", slug: "real-time-voice-conversion", status: "Work in progress", kind: "EXPLORATION",
    summary: "An exploration of real-time voice conversion technology.",
    positioning: "An ongoing exploration of transforming voice in real time, with latency and naturalness as central questions.",
    draftSections: [
      { heading: "The exploration", copy: "This work is currently an exploration of real-time voice conversion technology, not a completed product. The placeholder framing centres on the technical tension that makes the area interesting: changing vocal characteristics while keeping the experience responsive and the converted voice coherent." },
      { heading: "Questions worth investigating", copy: "A future write-up can explain the conversion approach, the role of audio processing or machine-learning models, and how latency, quality and compute requirements influence the experience. No particular model, pipeline or performance result is claimed here." },
      { heading: "An evolving record", copy: "As the exploration develops, this page can become a field note covering experiments, observations, trade-offs and next steps. It will remain clearly marked as work in progress until there is a confirmed product outcome to present." }
    ],
    detailsToConfirm: ["Current stage and intended use case", "Approach, models and audio pipeline being explored", "Experiments and evaluation criteria", "Current limitations and next milestones", "Any shareable audio/video samples"]
  }
];
export function getProjectBySlug(slug: string) { return projects.find((project) => project.slug === slug); }
