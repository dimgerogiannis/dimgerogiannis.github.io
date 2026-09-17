// Publications shown on Home (selected) and on /publications.
// To add a paper: put its teaser in public/teasers/ and add an entry at the top.

export interface Author {
  name: string;
  url: string;
}

export interface Publication {
  id: string;
  title: string;
  url: string;
  venue: string;
  info: string;
  teaser: string;
  teaserWidth: number;
  teaserHeight: number;
  authors: Author[];
  links: { label: string; url: string }[];
  bibtex: string;
  selected?: boolean;
}

export const ME = "Dimitrios Gerogiannis";

export const publications: Publication[] = [
  {
    id: "arc2avatar",
    title: "Arc2Avatar: Generating Expressive 3D Avatars from a Single Image via ID Guidance",
    url: "https://arc2avatar.github.io/",
    venue: "CVPR 2025",
    info: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025",
    teaser: "/teasers/arc2avatar.jpg",
    teaserWidth: 1200,
    teaserHeight: 614,
    authors: [
      { name: "Dimitrios Gerogiannis", url: "https://dimgerogiannis.github.io/" },
      { name: "Foivos Paraperas Papantoniou", url: "https://foivospar.github.io/" },
      { name: "Rolandos Alexandros Potamias", url: "https://rolpotamias.github.io/" },
      { name: "Alexandros Lattas", url: "https://alexlattas.com/" },
      { name: "Stefanos Zafeiriou", url: "https://profiles.imperial.ac.uk/s.zafeiriou" },
    ],
    links: [
      { label: "Paper", url: "https://arxiv.org/pdf/2501.05379" },
      { label: "Project", url: "https://arc2avatar.github.io" },
    ],
    bibtex: `@article{gerogiannis2025arc2avatar,
  title={Arc2Avatar: Generating Expressive 3D Avatars from a Single Image via ID Guidance},
  author={Gerogiannis, Dimitrios and Papantoniou, Foivos Paraperas and Potamias, Rolandos Alexandros and Lattas, Alexandros and Zafeiriou, Stefanos},
  journal={arXiv preprint arXiv:2501.05379},
  year={2025}
}`,
    selected: true,
  },
  {
    id: "animateme",
    title: "AnimateMe: 4D Facial Expressions via Diffusion Models",
    url: "https://arxiv.org/abs/2403.17213",
    venue: "ECCV 2024",
    info: "European Conference on Computer Vision (ECCV), 2024",
    teaser: "/teasers/animateme.jpg",
    teaserWidth: 1200,
    teaserHeight: 664,
    authors: [
      { name: "Dimitrios Gerogiannis", url: "https://dimgerogiannis.github.io/" },
      { name: "Foivos Paraperas Papantoniou", url: "https://foivospar.github.io/" },
      { name: "Rolandos Alexandros Potamias", url: "https://rolpotamias.github.io/" },
      { name: "Alexandros Lattas", url: "https://alexlattas.com/" },
      { name: "Stylianos Moschoglou", url: "https://www.doc.ic.ac.uk/~sm3515/" },
      { name: "Stylianos Ploumpis", url: "https://www.ploumpis.com/" },
      { name: "Stefanos Zafeiriou", url: "https://profiles.imperial.ac.uk/s.zafeiriou" },
    ],
    links: [{ label: "Paper", url: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/09918.pdf" }],
    bibtex: `@inproceedings{gerogiannis2024animateme,
  title={AnimateMe: 4D facial expressions via diffusion models},
  author={Gerogiannis, Dimitrios and Papantoniou, Foivos Paraperas and Potamias, Rolandos Alexandros and Lattas, Alexandros and Moschoglou, Stylianos and Ploumpis, Stylianos and Zafeiriou, Stefanos},
  booktitle={European Conference on Computer Vision},
  pages={270--287},
  year={2024},
  organization={Springer}
}`,
    selected: true,
  },
];
