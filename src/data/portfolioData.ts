export interface CourseTopicCard {
  id: string;
  moduleCode: string;
  title: string;
  strategy: string;
  keyConcepts: string[];
  learningNotes: string;
  category: 'Foundations' | 'Algorithms' | 'Deep Learning & LLMs' | 'Applications';
  status: 'Completed' | 'In Progress' | 'Planned';
  dateAdded?: string;
}

export interface WorkflowStage {
  id: string;
  stepNumber: number;
  name: string;
  shortTag: string;
  summary: string;
  inputDescription: string;
  actionDetails: string[];
  critiqueCriteria?: string[];
  outputDescription?: string;
  agentRole: string;
  statusBadge: string;
}

export interface ProjectDetailSection {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  content: string[];
  placeholders?: string[];
  subsections?: {
    subtitle: string;
    description: string;
    tags?: string[];
  }[];
}

export interface ReflectionItem {
  id: string;
  title: string;
  category: string;
  insight: string;
  isPlaceholder: boolean;
  takeaway: string;
}

export const initialCourseTopics: CourseTopicCard[] = [
  {
    id: 'topic-1',
    moduleCode: 'MODULE 01',
    title: '[Course Topic Placeholder: Core Linguistic Foundations & Tokenization]',
    strategy: '[Study Strategy: Reading foundational literature, implementing BPE/WordPiece tokenizers from scratch, and analyzing vocabulary boundary heuristics.]',
    keyConcepts: [
      '[Concept Placeholder: Morphology & Phonology]',
      '[Concept Placeholder: Subword Tokenization Algorithms]',
      '[Concept Placeholder: N-gram Language Modeling & Perplexity]'
    ],
    learningNotes: '[Placeholder: Enter personal class notes, homework insights, or laboratory takeaways for Module 01 here.]',
    category: 'Foundations',
    status: 'Completed',
    dateAdded: 'Week 1-3'
  },
  {
    id: 'topic-2',
    moduleCode: 'MODULE 02',
    title: '[Course Topic Placeholder: Syntactic Parsing & Dependency Grammar]',
    strategy: '[Study Strategy: Comparing transition-based vs. graph-based dependency parsing architectures and analyzing syntactic ambiguity in complex compound sentences.]',
    keyConcepts: [
      '[Concept Placeholder: Context-Free Grammars (CFGs)]',
      '[Concept Placeholder: CYK & Shift-Reduce Parsing]',
      '[Concept Placeholder: Universal Dependencies Treebanks]'
    ],
    learningNotes: '[Placeholder: Enter personal class notes, homework insights, or laboratory takeaways for Module 02 here.]',
    category: 'Foundations',
    status: 'Completed',
    dateAdded: 'Week 4-6'
  },
  {
    id: 'topic-3',
    moduleCode: 'MODULE 03',
    title: '[Course Topic Placeholder: Distributional Semantics & Neural Word Embeddings]',
    strategy: '[Study Strategy: Benchmarking static embeddings vs. contextualized representations across semantic similarity and analogy suites.]',
    keyConcepts: [
      '[Concept Placeholder: Vector Space Models & Cosine Distance]',
      '[Concept Placeholder: Word2Vec (Skip-gram, CBOW) & GloVe]',
      '[Concept Placeholder: Contextual Representation Dynamics]'
    ],
    learningNotes: '[Placeholder: Enter personal class notes, homework insights, or laboratory takeaways for Module 03 here.]',
    category: 'Algorithms',
    status: 'In Progress',
    dateAdded: 'Week 7-9'
  },
  {
    id: 'topic-4',
    moduleCode: 'MODULE 04',
    title: '[Course Topic Placeholder: Sequence-to-Sequence & Attention Mechanisms]',
    strategy: '[Study Strategy: Deconstructing the self-attention mechanism matrix algebra, multi-head projections, and positional encoding techniques.]',
    keyConcepts: [
      '[Concept Placeholder: Recurrent Networks & Bottleneck Limits]',
      '[Concept Placeholder: Scaled Dot-Product Attention]',
      '[Concept Placeholder: Transformer Encoder-Decoder Formulations]'
    ],
    learningNotes: '[Placeholder: Enter personal class notes, homework insights, or laboratory takeaways for Module 04 here.]',
    category: 'Deep Learning & LLMs',
    status: 'In Progress',
    dateAdded: 'Week 10-12'
  },
  {
    id: 'topic-5',
    moduleCode: 'MODULE 05',
    title: '[Course Topic Placeholder: Pretrained Language Models & Fine-Tuning]',
    strategy: '[Study Strategy: Analyzing masked language modeling (BERT) vs. causal generation (GPT), parameter-efficient tuning (LoRA, Prefix Tuning), and evaluation suites.]',
    keyConcepts: [
      '[Concept Placeholder: Self-Supervised Pretraining Objectives]',
      '[Concept Placeholder: Parameter-Efficient Fine-Tuning (PEFT)]',
      '[Concept Placeholder: In-Context Learning & Prompt Engineering]'
    ],
    learningNotes: '[Placeholder: Enter personal class notes, homework insights, or laboratory takeaways for Module 05 here.]',
    category: 'Deep Learning & LLMs',
    status: 'Planned',
    dateAdded: 'Week 13-14'
  },
  {
    id: 'topic-6',
    moduleCode: 'MODULE 06',
    title: '[Course Topic Placeholder: Information Extraction & Domain Adaptation in Computational Linguistics]',
    strategy: '[Study Strategy: Investigating low-resource domain transfer, named entity recognition in domain-specific corpora, and hallucination reduction methods.]',
    keyConcepts: [
      '[Concept Placeholder: Domain-Specific Vocabulary Mismatches]',
      '[Concept Placeholder: Relation Extraction & Discourse Parsing]',
      '[Concept Placeholder: Grounded Factuality & Attribution Audits]'
    ],
    learningNotes: '[Placeholder: Enter personal class notes, homework insights, or laboratory takeaways for Module 06 here.]',
    category: 'Applications',
    status: 'Planned',
    dateAdded: 'Week 15-16'
  }
];

export const projectWorkflowStages: WorkflowStage[] = [
  {
    id: 'stage-1',
    stepNumber: 1,
    name: 'Query Ingestion & Analysis',
    shortTag: 'QUERY',
    summary: 'Deconstructs the complex legal query, extracting legal facets, jurisdiction constraints, and speaker-attribution requirements.',
    inputDescription: 'User legal prompt (e.g. "What was Justice Chandrachud\'s concurring stance regarding Article 21 privacy bounds in the Puttaswamy judgment?")',
    actionDetails: [
      'Tokenization & domain-specific legal entity tagging (Statutes, Bench, Petitioners, Respondents).',
      'Disambiguation of petitioner claims vs. judicial ruling assertions.',
      'Generation of decomposed sub-queries for multi-hop precedent lookup.'
    ],
    agentRole: 'Query Decomposer & Intent Parser',
    statusBadge: 'Query Standardized'
  },
  {
    id: 'stage-2',
    stepNumber: 2,
    name: 'Hierarchical Attribution Retrieval',
    shortTag: 'RETRIEVAL',
    summary: 'Executes hybrid dense-sparse search across parsed Indian legal corpora with chunk-level speaker attribution metadata.',
    inputDescription: 'Decomposed sub-queries with statutory filtering masks & jurisdictional temporal bounds.',
    actionDetails: [
      'Dense vector search across legal embeddings (specialized for Indian case law).',
      'Sparse keyword retrieval (BM25) over verbatim legal citations and Indian Penal Code sections.',
      'Hierarchical chunk linking: associating extracted paragraphs with the exact speaker (Judge, Petitioner Counsel, or Respondent Counsel).'
    ],
    agentRole: 'Attribution-Aware Hybrid Retriever',
    statusBadge: 'Top-K Passages Fetched'
  },
  {
    id: 'stage-3',
    stepNumber: 3,
    name: 'Evidence Evaluation & Attribution Critique',
    shortTag: 'EVIDENCE EVALUATION',
    summary: 'The agentic critic evaluates whether retrieved excerpts actually satisfy the query without speaker entanglement or factual gaps.',
    inputDescription: 'Candidate passage set along with original legal proposition and speaker intent tags.',
    actionDetails: [
      'Relevance Scoring: Verifies semantic alignment with the specific legal question asked.',
      'Speaker Attribution Verification: Verifies whether the argument is attributed to the correct party (e.g. counsel argument vs. final ratio decidendi).',
      'Completeness Check: Identifies if critical statutory provisions or overruling precedents are missing.'
    ],
    critiqueCriteria: [
      'Criterion A: Is the passage authored by the queried judge/speaker? (Attribution Fidelity)',
      'Criterion B: Does the passage contain current law or has it been overturned? (Precedent Validity)',
      'Criterion C: Is evidence sufficient to generate an uncorrupted answer? (Sufficiency Score)'
    ],
    agentRole: 'Agentic Evidence Evaluator (Judge Critic)',
    statusBadge: 'Confidence Scored'
  },
  {
    id: 'stage-4',
    stepNumber: 4,
    name: 'Agentic Correction & Fallback Loop',
    shortTag: 'CORRECTION',
    summary: 'If evidence is rated ambiguous, contradictory, or attribution-compromised, the agent triggers an active corrective loop.',
    inputDescription: 'Critique report flagged with specific evidence defects (e.g., "Ambiguous Counsel vs. Bench Ratio", "Incomplete Precedent").',
    actionDetails: [
      'Query Rewriting & Targeted Narrowing: Reformulating search queries with explicit speaker-role anchors.',
      'External Statutory Lookup: Re-querying official Gazette or Supreme Court case databases for missing cross-references.',
      'Filtering & Passage Pruning: Discarding misleading or adversarial excerpts that confound legal holdings.'
    ],
    agentRole: 'Corrective Action Orchestrator',
    statusBadge: 'Evidence Rewritten & Refined'
  },
  {
    id: 'stage-5',
    stepNumber: 5,
    name: 'Attributed Grounded Generation',
    shortTag: 'GROUNDED GENERATION',
    summary: 'Synthesizes the definitive legal response with strict, citation-grounded language and zero hallucination tolerance.',
    inputDescription: 'Verified, attribution-tagged passage bundle + constrained synthesis prompt.',
    actionDetails: [
      'Strict grounded decoding: Every assertion must be bound to a cited paragraph and verified speaker.',
      'Explicit boundary delineation: Clearly differentiating obiter dicta from ratio decidendi.',
      'Inline legal citation anchoring with verifiable source links and bench composition.'
    ],
    agentRole: 'Constrained Grounded Generator',
    statusBadge: 'Synthesis Complete & Verifiable'
  }
];

export const projectDetailSections: ProjectDetailSection[] = [
  {
    id: 'overview',
    title: 'Project Overview',
    iconName: 'Compass',
    summary: 'Agentic Corrective RAG (Self-Reflective Retrieval-Augmented Generation) engineered specifically for the complexities of the Indian Legal System.',
    content: [
      'The Indian legal corpus is characterized by exceptionally lengthy judgments (often exceeding 100 pages per case), ornate linguistic formulations, complex multi-bench compositions, and intricate interweaving of petitioner arguments, respondent counter-arguments, and the court’s ratio decidendi.',
      'Standard RAG pipelines fail catastrophically in this domain because they treat documents as flat text chunks, frequently attributing statements made by petitioner counsel as being the binding verdict of the Supreme Court.',
      'This project implements an Agentic Corrective RAG (CRAG) system designed to preserve speaker provenance ("who said what"), evaluate retrieved evidence before passing it to the language model, and autonomously correct weak or contradictory retrieval through self-directed iterative refinement.'
    ]
  },
  {
    id: 'problem-statement',
    title: 'Problem Statement',
    iconName: 'AlertTriangle',
    summary: 'Why generic NLP and standard naive RAG pipelines fail on Indian legal texts.',
    content: [
      'Speaker Entanglement: In Indian judgments, paragraphs frequently summarize what a counsel submitted without explicit repeated attribution markers in every sentence. Naive chunking severs context, causing LLMs to mistake advocate assertions for judicial precedent.',
      'High Latent Hallucination Risk: In legal advice and legal research, hallucinating an overruled citation or falsely attributing an obiter dictum as binding ratio carries severe professional and ethical ramifications.',
      'Statutory & Precedent Density: Indian case law features intense cross-referencing across centuries of colonial-era statutes (e.g. IPC, CrPC, Evidence Act) alongside modern constitutional amendments, requiring multi-hop verification.'
    ],
    subsections: [
      {
        subtitle: 'The "Who Said What" Dilemma',
        description: 'Judgments consist of four conflicting voices: Appellant, Respondent, Intervener, and the Bench. Standard vector search retrieves semantically similar passages irrespective of which party voiced the argument.',
        tags: ['Speaker Attribution', 'Argument Mining', 'Legal NLP']
      },
      {
        subtitle: 'The Evidence Sufficiency Barrier',
        description: 'Standard RAG blindly forwards top-k retrieved chunks to generation even if they lack sufficient evidentiary support or contradict the query scope.',
        tags: ['Evidence Gap', 'Blind Generation', 'CRAG Necessity']
      }
    ]
  },
  {
    id: 'objectives',
    title: 'Project Objectives',
    iconName: 'Target',
    summary: 'Core scientific and engineering goals formulated for the research project.',
    content: [
      'Design an Attribution-Preserving Ingestion Pipeline: Parse Indian court judgments into hierarchical discourse segments where every chunk is structurally bonded to its speaker role (Petitioner, Respondent, Judge, Precedent Citation).',
      'Implement an Autonomous Evidence Evaluator: Develop an agentic evaluator that computes attribution fidelity, topical sufficiency, and legal validity prior to context injection.',
      'Build a Self-Corrective Fallback Mechanism: Enable the system to dynamically rewrite search queries, retrieve targeted supplementary statutes, and filter ungrounded noise when initial retrieval is suboptimal.',
      'Enforce Verifiable Grounded Generation: Produce structured legal briefs with explicit inline citations, distinguishing binding ratio decidendi from non-binding obiter dicta.'
    ]
  },
  {
    id: 'methodology',
    title: 'Methodology',
    iconName: 'Layers',
    summary: 'Systematic approach combining computational linguistics, discourse parsing, and agentic reflection.',
    content: [
      'Phase 1: Legal Discourse Chunking — Custom boundary heuristics and named entity recognition adapted for Indian court judgment formatting (SCR, SCC, Indian Kanoon structures). Chunks retain metadata of authoring judge and argumentative section.',
      'Phase 2: Dual Hybrid Retrieval — Combining BM25 keyword matching for verbatim statutory sections (e.g., "Section 302 IPC") with dense transformer embeddings for semantic legal concepts.',
      'Phase 3: Agentic Evaluation Gatekeeper — A dedicated evaluator agent verifies whether top retrieved passages satisfy factual clarity and speaker attribution thresholds.',
      'Phase 4: Corrective Recovery Routing — If the score falls below threshold, the agent executes targeted query expansion or statutory lookup before generating the final answer.'
    ],
    subsections: [
      {
        subtitle: 'Speaker Tagging Heuristic',
        description: 'Employs discourse markers and linguistic boundary detection to assign each paragraph to {Judge, Appellant Counsel, Respondent Counsel, Statutory Text, Quoted Precedent}.',
        tags: ['Discourse Parsing', 'Speaker Tagging']
      },
      {
        subtitle: 'Corrective Action State Machine',
        description: 'Determines whether retrieved evidence is [CONFIRMED_ACCURATE], [AMBIGUOUS_NEED_MORE], or [INCORRECT_REWRITE_QUERY].',
        tags: ['State Machine', 'Agentic Control']
      }
    ]
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    iconName: 'Cpu',
    summary: 'Modular end-to-end pipeline detailing document flow, agentic decision nodes, and generative safeguards.',
    content: [
      'The architecture comprises four core subsystems: Document Preprocessing & Attribution Parser, Vector & BM25 Hybrid Index, Agentic Corrective Orchestration Engine, and the Grounded Synthesis Module.',
      'Every interaction runs through deterministic guardrails to prevent ungrounded generation. The agent has the authority to request additional retrieval passes or report lack of verifiable legal authority rather than hallucinate answers.'
    ],
    subsections: [
      {
        subtitle: 'Subsystem 1: Document & Attribution Ingestion',
        description: 'PDF/Judicial judgment ingestion -> Discourse segmenter -> Metadata enrichment (Speaker, Bench, Year, Act) -> Dual vector & lexical indexing.',
        tags: ['Data Ingestion', 'Discourse Segmenter']
      },
      {
        subtitle: 'Subsystem 2: Agentic Evaluator & Correction Router',
        description: 'Scores retrieved passages against speaker fidelity and legal sufficiency. Invokes corrective search if ambiguity detected.',
        tags: ['Evaluator Agent', 'Corrective Loop']
      },
      {
        subtitle: 'Subsystem 3: Grounded Synthesizer & Citation Auditor',
        description: 'Generates responses with strict citation constraints, referencing exact paragraph numbers and verifying attribution claims.',
        tags: ['Grounded Decoding', 'Citation Verifier']
      }
    ]
  },
  {
    id: 'technologies',
    title: 'Technologies & Tooling',
    iconName: 'Wrench',
    summary: 'Technical stack and NLP toolchain utilized across development and experimentation.',
    content: [
      'Vector & Retrieval Infrastructure: Qdrant / FAISS for dense vector search, Rank-BM25 for lexical statutory matching.',
      'NLP Models & Embeddings: Domain-adapted Legal embeddings (Legal-BERT / BGE / text-embedding-3) and Large Language Model inference endpoints.',
      'Agentic Orchestration: LangGraph / LlamaIndex / Python for state machine workflows, conditional routing, and corrective loops.',
      'Evaluation & Benchmarking: Ragas, TruLens, and custom Indian legal question-answering evaluation datasets.'
    ],
    subsections: [
      {
        subtitle: 'Computational Linguistics & NLP Stack',
        description: 'SpaCy, Hugging Face Transformers, Tokenizers, Regularized Legal Discourse Parsers.',
        tags: ['Transformers', 'SpaCy', 'Legal-BERT', 'Hugging Face']
      },
      {
        subtitle: 'Vector & Agentic Frameworks',
        description: 'LangGraph State Graph, Hybrid Vector Search, PyTorch.',
        tags: ['LangGraph', 'Qdrant/FAISS', 'BM25', 'Python']
      }
    ]
  },
  {
    id: 'evaluation',
    title: 'Evaluation & Benchmarks',
    iconName: 'BarChart3',
    summary: 'Evaluation framework and empirical metrics structure (Placeholders reserved for student lab results).',
    content: [
      'To maintain absolute academic integrity, empirical benchmark scores are represented as placeholders below until final course experimentation and validation runs are completed.',
      'The evaluation framework assesses the system along three critical legal dimensions: Retrieval Accuracy, Speaker Attribution Fidelity, and Generation Groundedness.'
    ],
    placeholders: [
      '[Evaluation Metric: Context Retrieval Precision@5 - Placeholder %]',
      '[Evaluation Metric: Speaker Attribution Accuracy - Placeholder % (Comparing baseline naive RAG vs. Agentic Attribution RAG)]',
      '[Evaluation Metric: Hallucination Rate on Legal Citations - Placeholder % (Measured using citation verification tooling)]',
      '[Evaluation Metric: Corrective Loop Trigger Efficiency - Placeholder % (Frequency of successful correction vs. baseline failure)]',
      '[Empirical Test Suite Details: Custom evaluation corpus of Indian Supreme Court and High Court judgments - Placeholder for student test dataset]'
    ]
  },
  {
    id: 'future-improvements',
    title: 'Future Improvements & Roadmap',
    iconName: 'Sparkles',
    summary: 'Planned research horizons and structural enhancements for subsequent project iterations.',
    content: [
      'Multilingual Indian Vernacular Court Transcripts: Expanding support beyond English to judgments and proceedings in Hindi, Tamil, Bengali, and other recognized Indian languages using multilingual cross-encoders.',
      'Temporal Legal Reasoning: Incorporating automatic tracking of legal amendments to prevent citing provisions that were repealed or revised by subsequent constitutional amendments.',
      'Fine-Grained Legal Citation Graph: Constructing a living knowledge graph that maps precedent linkages (Distinguished, Affirmed, Overruled, Followed) across decades of Indian Supreme Court jurisprudence.'
    ],
    placeholders: [
      '[Student Research Idea Placeholder: Enter planned thesis direction or next development iteration here]',
      '[Student Engineering Target Placeholder: Enter infrastructure scaling or low-latency optimization plan here]'
    ]
  }
];

export const initialReflections: ReflectionItem[] = [
  {
    id: 'ref-1',
    title: 'The Fragility of Flat Embeddings in Structured Discourse',
    category: 'Theoretical Insight',
    insight: 'Studying Computational Linguistics revealed that text is not merely a sequence of tokens in embedding space; it represents a hierarchical rhetorical structure. In legal texts, treating a 40-page judgment as arbitrary 500-token chunks destroys the argumentative context. Without explicit discourse parsing, models confuse advocate pleadings with judicial decree.',
    takeaway: 'Vector proximity does not equal semantic validity in domain-specific discourse. Linguistic structure must guide chunking boundaries.',
    isPlaceholder: false
  },
  {
    id: 'ref-2',
    title: 'Why Agentic Reflection is Essential for Critical NLP',
    category: 'Engineering & Architecture',
    insight: 'In low-stakes conversational AI, hallucinations are tolerated as minor slips. In legal, medical, and statutory NLP, a single hallucinated citation invalidates the entire system. Building Corrective RAG taught me that generative models require deterministic verification layers—an autonomous critic that tests evidence before the LLM can output a single word.',
    takeaway: 'True intelligence lies in self-critique: the ability of an NLP agent to recognize when retrieved evidence is insufficient and actively seek correction.',
    isPlaceholder: false
  },
  {
    id: 'ref-3',
    title: '[Student Reflection Placeholder: Computational Linguistics & Indian Legal Realities]',
    category: 'Course Synthesis',
    insight: '[Placeholder: Enter your reflections on navigating multi-jurisdictional legalese, tokenization challenges with Indian nomenclature and statutory citations, and insights gained during the course.]',
    takeaway: '[Placeholder: Add personal key takeaway regarding your research path or career aspirations in NLP.]',
    isPlaceholder: true
  },
  {
    id: 'ref-4',
    title: '[Student Reflection Placeholder: Balancing Computational Cost & Retrieval Precision]',
    category: 'Performance Trade-offs',
    insight: '[Placeholder: Enter personal reflections on latency vs. accuracy trade-offs encountered when running multi-stage agentic critique loops vs. single-pass generation.]',
    takeaway: '[Placeholder: Add personal key takeaway regarding deployment in practical low-resource or edge environments.]',
    isPlaceholder: true
  }
];
