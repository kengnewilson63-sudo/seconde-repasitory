// ─── playlist.component.ts ───────────────────────────────
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// CommonModule est OBLIGATOIRE pour utiliser @if, @for, ngClass, ngStyle

// ── L'interface ─────────────────────────────────
// Elle dit : "une vidéo ressemble TOUJOURS à ceci"
interface Video {
  id:            number;
  titre:         string;
  duree:         string;          // ex: "12:34"
  estActive:     boolean;         // la vidéo sélectionnée ?
  statutLecture: 'lecture' | 'pause' | 'arret'; // 3 valeurs possibles
  progression:   number;          // 0 à 100
  estFavori:     boolean;
  qualite:       'SD' | 'HD' | '4K';
}

@Component({
  selector:    'app-playlist',
  standalone:  true,
  imports:     [CommonModule],
  templateUrl: './playlist.html',
  styleUrls:   ['./playlist.css'],
})
export class PlaylistComponent {

  // ── Les données ──────────────────────────────────
  // Un tableau de 5 vidéos. Chaque objet respecte l'interface Video.
  videos: Video[] = [
    {
      id: 1, titre: 'Introduction à Angular',
      duree: '14:20', estActive: true,
      statutLecture: 'lecture', progression: 45,
      estFavori: true, qualite: 'HD'
    },
    {
      id: 2, titre: 'Les composants Angular',
      duree: '22:05', estActive: false,
      statutLecture: 'arret', progression: 0,
      estFavori: false, qualite: 'HD'
    },
    {
      id: 3, titre: '@if et @else expliqués',
      duree: '18:47', estActive: false,
      statutLecture: 'pause', progression: 60,
      estFavori: true, qualite: '4K'
    },
    {
      id: 4, titre: 'ngClass et ngStyle',
      duree: '25:10', estActive: false,
      statutLecture: 'arret', progression: 100,
      estFavori: false, qualite: '4K'
    },
    {
      id: 5, titre: 'Exercice complet',
      duree: '32:00', estActive: false,
      statutLecture: 'arret', progression: 0,
      estFavori: false, qualite: 'SD'
    },
  ];

  // ── Les méthodes ─────────────────────────────────

  // Méthode 1 : getCouleurBarre(progression)
  // Utilisée dans ngStyle pour colorier la barre dynamiquement.
  // Reçoit un nombre 0-100, retourne une couleur CSS en string.
  getCouleurBarre(progression: number): string {
    if (progression < 30) return '#ef4444'; // rouge  → peu avancé
    if (progression < 70) return '#f59e0b'; // orange → en cours
    return '#16a34a';                        // vert   → presque fini
  }

  // Méthode 2 : selectionnerVideo(id)
  // Clique sur une carte → cette vidéo devient active, les autres non.
  selectionnerVideo(id: number): void {
    this.videos.forEach(v => {
      v.estActive = (v.id === id); // true si id correspond, false sinon
    });
  }

  // Méthode 3 : basculerFavori(id)
  // Trouve la vidéo et inverse estFavori (true → false, false → true).
  basculerFavori(id: number): void {
    const v = this.videos.find(v => v.id === id);
    if (!v) return;
    v.estFavori = !v.estFavori; // l'opérateur ! inverse un boolean
  }

  // Méthode 4 : changerStatut(id, statut)
  // Change le statutLecture d'une vidéo.
  changerStatut(id: number, statut: 'lecture' | 'pause' | 'arret'): void {
    const v = this.videos.find(v => v.id === id);
    if (!v) return;
    v.statutLecture = statut;
  }
}