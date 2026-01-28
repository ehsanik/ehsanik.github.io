import molmo from '../assets/selected_works/molmo.png'
import flare from '../assets/selected_works/flare.png'
import manipulateanything from '../assets/selected_works/manipulateanything.gif'
import poliformer from '../assets/selected_works/poliformer.png'
import harmonicmm from '../assets/selected_works/harmonicmm.gif'
import rtx from '../assets/selected_works/rtx.png'
import spoc from '../assets/selected_works/spoc.png'
import promptable from '../assets/selected_works/promptable.jpg'
import objaverseXl from '../assets/selected_works/objaverse-xl.jpg'
import sfa from '../assets/selected_works/sfa.jpg'
import objaverse from '../assets/selected_works/objaverse.jpg'
import phone2proc from '../assets/selected_works/phone2proc.jpg'
import procthor from '../assets/selected_works/procthor.jpg'
import mvole from '../assets/selected_works/mvole.jpg'
import continuous from '../assets/selected_works/continuous.jpg'
import contrastive from '../assets/selected_works/contrastive.jpg'
import atp from '../assets/selected_works/atp.jpg'
import manipulathor from '../assets/selected_works/manipulathor.png'
import human from '../assets/selected_works/human.jpg'
import hideSeek from '../assets/selected_works/hide_seek.jpg'
import force from '../assets/selected_works/force.jpg'
import learn2learn from '../assets/selected_works/learn2learn.jpg'
import dog from '../assets/selected_works/dog.jpg'
import segan from '../assets/selected_works/segan.jpg'

const papers = [
  {
    image: molmo,
    title: 'Molmo and PixMo: Open Weights and Open Data for State-of-the-Art Multimodal Models',
    authors: 'M Deitke, C Clark, …, <b>Kiana Ehsani</b>, et. al.',
    venue: 'Arxiv',
    year: 2024,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2409.17146' },
      { label: 'Blog', url: 'https://molmo.allenai.org/blog' },
      { label: 'Demo', url: 'https://molmo.allenai.org/' },
    ],
    description: 'Molmo and PixMo present open weights and open data to advance multimodal AI models, pushing the boundaries of state-of-the-art performance across various tasks.',
  },
  {
    image: flare,
    title: 'FLaRe: Achieving Masterful and Adaptive Robot Policies with Large-Scale Reinforcement Learning Fine-Tuning',
    authors: 'J Hu, R Hendrix, A Farhadi, A Kembhavi, R Martin-Martin, P Stone, KH Zeng, <b>Kiana Ehsani</b>',
    venue: 'Arxiv',
    year: 2024,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2409.16578' },
      { label: 'Website', url: 'https://robot-flare.github.io/' },
    ],
    description: 'FLaRe utilizes large-scale reinforcement learning fine-tuning to create adaptive and highly capable robot policies, achieving state-of-the-art results in both simulated and real-world environments.',
  },
  {
    image: manipulateanything,
    title: 'Manipulate-Anything: Automating Real-World Robots using Vision-Language Models',
    authors: 'Jiafei Duan*, Wentao Yuan*, Wilbert Pumacay, Yi Ru Wang, <b>Kiana Ehsani</b>, Dieter Fox, Ranjay Krishna',
    venue: 'CoRL',
    year: 2024,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/pdf/2406.18915' },
      { label: 'Website', url: 'https://robot-ma.github.io/' },
      { label: 'Video', url: 'https://www.youtube.com/watch?v=fw2JBsmFc-4' },
    ],
    description: 'Manipulate-Anything, is a scalable automated method for generating real-world robotic manipulation data without privileged state information or hand-designed skills, significantly outperforming existing methods and training more robust behavior cloning policies.',
  },
  {
    image: poliformer,
    title: 'PoliFormer: On-Policy RL with Transformers Results in Masterful Navigators',
    authors: 'Kuo-Hao Zeng, Zichen "Charles" Zhang, <b>Kiana Ehsani</b>, Rose Hendrix, Jordi Salvador, Alvaro Herrasti, Ross Girshick, Aniruddha Kembhavi, Luca Weihs',
    venue: 'CoRL',
    year: 2024,
    award: 'Best Paper Award',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/pdf/2406.20083' },
      { label: 'Website', url: 'https://poliformer.allen.ai/' },
    ],
    description: 'Policy TransFormer (PoliFormer) is a transformer-based policy trained using RL at scale in simulation. PoliFormer achieves SoTA results across LoCoBot and Stretch RE-1, in both simulation and real-world.',
  },
  {
    image: harmonicmm,
    title: 'Harmonic Mobile Manipulation',
    authors: 'Ruihan Yang, Yejin Kim, Aniruddha Kembhavi, Xiaolong Wang, <b>Kiana Ehsani</b>',
    venue: 'IROS',
    year: 2024,
    award: 'Best Paper Award',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/pdf/2312.06639' },
      { label: 'Website', url: 'https://rchalyang.github.io/HarmonicMM/' },
    ],
    description: 'HarmonicMM is an end-to-end learning approach that combines navigation and manipulation, significantly improving success rates in complex tasks like door opening and table cleaning, with successful real-world transfer of agents trained in simulation.',
  },
  {
    image: rtx,
    title: 'Open X-Embodiment: Robotic Learning Datasets and RT-X Models',
    authors: '<b>Kiana Ehsani</b>, et.al.',
    venue: 'ICRA',
    year: 2024,
    award: 'Best Paper Award',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2310.08864' },
      { label: 'Website', url: 'https://robotics-transformer-x.github.io/' },
    ],
    description: 'We assemble a dataset from 22 different robots collected through a collaboration between 21 institutions, demonstrating 527 skills (160266 tasks).',
  },
  {
    image: spoc,
    title: 'SPOC: Imitating Shortest Paths in Simulation Enables Effective Navigation and Manipulation in the Real World',
    authors: '<b>Kiana Ehsani</b>*, Tanmay Gupta*, Rose Hendrix*, Jordi Salvador*, Luca Weihs*, Kuo-Hao Zeng*, Kunal Pratap Singh, Yejin Kim, Winson Han, Alvaro Herrasti, Ranjay Krishna, Dustin Schwenk, Eli VanderBilt, Aniruddha Kembhavi',
    venue: 'CVPR',
    year: 2024,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2312.02976' },
      { label: 'Website', url: 'https://spoc-robot.github.io/' },
      { label: 'Code', url: 'https://github.com/allenai/spoc-robot-training' },
    ],
    description: 'We train a supervised model to imitate shortest path trajectories collected from simulation and show that it generalizes to perform effective navigation and manipulation when deployed on real world agents.',
  },
  {
    image: promptable,
    title: 'Promptable Behaviors: Personalizing Multi-Objective Rewards from Human Preferences',
    authors: 'Minyoung Hwang, Luca Weihs, Chanwoo Park, Kimin Lee, Ani Kembhavi, <b>Kiana Ehsani</b>',
    venue: 'CVPR',
    year: 2024,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2312.09337' },
      { label: 'Website', url: 'https://promptable-behaviors.github.io/' },
    ],
    description: 'We propose a novel framework that facilitates efficient personalization of robotic agents to diverse human preferences in complex environments.',
  },
  {
    image: objaverseXl,
    title: 'Objaverse-XL: A Universe of 10M+ 3D Objects',
    authors: 'Matt Deitke, Ruoshi Liu, Matthew Wallingford, Huong Ngo, Oscar Michel, Aditya Kusupati, Alan Fan, Christian Laforte, Vikram Voleti, Samir Yitzhak Gadre, Eli VanderBilt, Aniruddha Kembhavi, Carl Vondrick, Georgia Gkioxari, <b>Kiana Ehsani</b>, Ludwig Schmidt*, Ali Farhadi*',
    venue: 'NeurIPS',
    year: 2023,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2307.05663' },
      { label: 'Website', url: 'https://objaverse.allenai.org/' },
      { label: 'Code', url: 'https://github.com/allenai/objaverse-xl' },
    ],
    description: 'We introduce Objaverse-XL, an open dataset of over 10 million 3D objects. With it, we train Zero123-XL, a foundation model for 3D, observing incredible 3D generalization abilities. With the Zero123-XL base model, we can then perform image-to-3D and text-to-3D.',
  },
  {
    image: sfa,
    title: 'Structure from Action: Learning Interactions for 3D Articulated Object Structure Discovery',
    authors: 'Neil Nie, Samir Yitzhak Gadre, <b>Kiana Ehsani</b>, Shuran Song',
    venue: 'IROS',
    year: 2023,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2207.08997' },
      { label: 'Website', url: 'https://sfa.cs.columbia.edu/' },
    ],
    description: 'We learn how to interact with 3D articulated objects to reconstruct their parts and discover joint constraints.',
  },
  {
    image: objaverse,
    title: 'Objaverse: A Universe of Annotated 3D Objects',
    authors: 'Matt Deitke, Dustin Schwenk, Jordi Salvador, Luca Weihs, Oscar Michel, Eli VanderBilt, Ludwig Schmidt, <b>Kiana Ehsani</b>, Aniruddha Kembhavi, Ali Farhadi',
    venue: 'CVPR',
    year: 2023,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2212.08051' },
      { label: 'Website', url: 'https://objaverse.allenai.org/objaverse-1.0' },
    ],
    description: 'Objaverse is a massive dataset of objects with 800K+ (and growing) 3D models with descriptive captions, tags, and animations.',
  },
  {
    image: phone2proc,
    title: 'Phone2Proc: Bringing Robust Robots Into Our Chaotic World',
    authors: 'Matt Deitke*, Rose Hendrix*, Luca Weihs, Ali Farhadi, <b>Kiana Ehsani</b>, Aniruddha Kembhavi',
    venue: 'CVPR',
    year: 2023,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/pdf/2212.04819.pdf' },
      { label: 'Website', url: 'https://allenai.org/project/phone2proc' },
    ],
    description: 'From a 10-minute iPhone scan of any environment, we generated simulated training scenes that semantically match that environment. Training a robot to perform ObjectNav in these scenes dramatically improves sim-to-real performance from 35% to 71%.',
  },
  {
    image: procthor,
    title: 'ProcTHOR: Large-Scale Embodied AI Using Procedural Generation',
    authors: 'Matt Deitke, Eli VanderBilt, Alvaro Herrasti, Luca Weihs, Jordi Salvador, <b>Kiana Ehsani</b>, Winson Han, Eric Kolve, Ali Farhadi, Aniruddha Kembhavi, Roozbeh Mottaghi',
    venue: 'NeurIPS',
    year: 2022,
    award: 'Outstanding Paper Award',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/pdf/2206.06994.pdf' },
      { label: 'Website', url: 'https://procthor.allenai.org/' },
    ],
    description: 'We built a platform to procedurally generate realistic, interactive, simulated 3D environments to dramatically scale up the diversity and size of training data in Embodied AI.',
  },
  {
    image: mvole,
    title: 'Object Manipulation via Visual Target Localization',
    authors: '<b>Kiana Ehsani</b>, Ali Farhadi, Aniruddha Kembhavi and Roozbeh Mottaghi',
    venue: 'ECCV',
    year: 2022,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2203.08141' },
      { label: 'Website', url: 'https://prior.allenai.org/projects/m-vole' },
      { label: 'Code', url: 'https://github.com/allenai/m-vole' },
    ],
    description: 'Manipulation via Visual Object Location Estimation (m-VOLE) enhances Embodied AI agents\' ability to manipulate objects by robustly estimating their 3D locations.',
  },
  {
    image: continuous,
    title: 'Continuous Scene Representations for Embodied AI',
    authors: 'Samir Y Gadre, <b>Kiana Ehsani</b>, Shuran Song and Roozbeh Mottaghi',
    venue: 'CVPR',
    year: 2022,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2203.17251' },
      { label: 'Website', url: 'https://prior.allenai.org/projects/csr' },
      { label: 'Code', url: 'https://github.com/allenai/CSR' },
    ],
    description: 'Continuous Scene Representations (CSR) are proposed as a dynamic, graph-based method for modeling scenes by an embodied agent, using continuous embeddings to represent object relationships.',
  },
  {
    image: contrastive,
    title: 'Contrasting Contrastive Self-Supervised Representation Learning Pipelines',
    authors: 'Klemen Kotar, Gabriel Ilharco, Ludwig Schmidt, <b>Kiana Ehsani</b>, and Roozbeh Mottaghi',
    venue: 'ICCV',
    year: 2021,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2103.14005' },
      { label: 'Website', url: 'https://prior.allenai.org/projects/virb' },
      { label: 'Code', url: 'https://github.com/allenai/virb' },
    ],
    description: 'This paper analyzes the impact of training methods and datasets on the performance of self-supervised representation learning, focusing on contrastive approaches through an extensive study of over 700 experiments.',
  },
  {
    image: atp,
    title: 'Act the Part: Learning Interaction Strategies for Articulated Object Part Discovery',
    authors: 'Samir Y. Gadre, <b>Kiana Ehsani</b>, and Shuran Song',
    venue: 'ICCV',
    year: 2021,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2105.01047' },
      { label: 'Website', url: 'https://atp.cs.columbia.edu/' },
    ],
    description: 'Act the Part (AtP) is a method designed to interact with articulated objects to discover and segment their parts without semantic labels.',
  },
  {
    image: manipulathor,
    title: 'ManipulaTHOR: A Framework for Visual Object Manipulation',
    authors: '<b>Kiana Ehsani</b>, Winson Han, Alvaro Herrasti, Eli VanderBilt, Luca Weihs, Eric Kolve, Aniruddha Kembhavi, and Roozbeh Mottaghi',
    venue: 'CVPR',
    year: 2021,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2104.11213' },
      { label: 'Website', url: 'https://ai2thor.allenai.org/manipulathor/' },
      { label: 'Code', url: 'https://github.com/allenai/manipulathor/' },
    ],
    description: 'ManipulaTHOR is a framework designed for realistic object manipulation with a robotic arm in complex scenes.',
  },
  {
    image: human,
    title: 'What Can You Learn from Your Muscles? Learning Visual Representation from Human Interactions',
    authors: '<b>Kiana Ehsani</b>, Daniel Gordon, Thomas Nguyen, Roozbeh Mottaghi, and Ali Farhadi',
    venue: 'ICLR',
    year: 2021,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2010.08539' },
      { label: 'Website', url: 'https://prior.allenai.org/projects/learn-representation-from-human' },
      { label: 'Code', url: 'https://github.com/ehsanik/muscleTorch' },
    ],
    description: 'This paper introduces a novel representation learning approach that leverages human interaction and attention cues, showing that this "muscly-supervised" method surpasses visual-only techniques.',
  },
  {
    image: hideSeek,
    title: 'Learning Generalizable Visual Representations via Interactive Gameplay',
    authors: 'Luca Weihs, Aniruddha Kembhavi, <b>Kiana Ehsani</b>, Sarah M Pratt, Winson Han, Alvaro Herrasti, Eric Kolve, Dustin Schwenk, and 2 more...',
    venue: 'ICLR',
    year: 2021,
    links: [
      { label: 'Paper', url: 'https://openreview.net/forum?id=UuchYL8wSZo' },
      { label: 'Website', url: 'https://prior.allenai.org/projects/cache' },
    ],
    description: 'This research shows that embodied gameplay, essential for neural flexibility in both humans and animals, can similarly impact artificial agents.',
  },
  {
    image: force,
    title: 'Use the Force, Luke! Learning to Predict Physical Forces by Simulating Effects',
    authors: '<b>Kiana Ehsani</b>, Shubham Tulsiani, Saurabh Gupta, Ali Farhadi, and Abhinav Gupta',
    venue: 'CVPR',
    year: 2020,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2003.12045' },
      { label: 'Website', url: 'https://ehsanik.github.io/forcecvpr2020/' },
      { label: 'Code', url: 'https://github.com/ehsanik/touchTorch' },
    ],
    description: 'This paper advances the understanding of human-object interactions by inferring contact points and physical forces from videos.',
  },
  {
    image: learn2learn,
    title: 'Learning to Learn How to Learn: Self-Adaptive Visual Navigation using Meta-Learning',
    authors: 'Mitchell Wortsman, <b>Kiana Ehsani</b>, Mohammad Rastegari, Ali Farhadi, and Roozbeh Mottaghi',
    venue: 'CVPR',
    year: 2019,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/1812.00971' },
      { label: 'Website', url: 'https://prior.allenai.org/projects/savn' },
      { label: 'Code', url: 'https://github.com/allenai/savn' },
    ],
    description: 'This paper introduces SAVN, a self-adaptive visual navigation method that uses meta-reinforcement learning to enable an agent to adapt and learn in new environments without explicit supervision.',
  },
  {
    image: dog,
    title: 'Who Let The Dogs Out? Modeling Dog Behavior From Visual Data',
    authors: '<b>Kiana Ehsani</b>, Hessam Bagherinezhad, Joe Redmon, Roozbeh Mottaghi, and Ali Farhadi',
    venue: 'CVPR',
    year: 2018,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/pdf/1803.10827.pdf' },
      { label: 'Website', url: 'https://github.com/ehsanik/dogTorch' },
      { label: 'Code', url: 'https://github.com/ehsanik/dogTorch' },
    ],
    description: 'DECADE is a dataset that captures the world from a dog\'s perspective, enabling the modeling of a visually intelligent agent that can predict and plan movements.',
  },
  {
    image: segan,
    title: 'SeGAN: Segmenting and Generating the Invisible',
    authors: '<b>Kiana Ehsani</b>, Roozbeh Mottaghi, and Ali Farhadi',
    venue: 'CVPR',
    year: 2018,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/1703.10239' },
      { label: 'Code', url: 'https://github.com/ehsanik/SeGAN' },
      { label: 'Website', url: 'https://github.com/ehsanik/SeGAN' },
      { label: 'Data', url: 'https://drive.google.com/file/d/1TfrP4Sptm6wPMdrn9MrWghfTNAMTCtlY/view?usp=sharing' },
    ],
    description: 'SeGAN is designed to generate and segment occluded parts of objects and infer depth layering, even when trained on synthetic images.',
  },
]

export default papers
