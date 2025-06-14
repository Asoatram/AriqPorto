import { Object3DNode, MaterialNode } from '@react-three/fiber';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

declare module '@react-three/fiber' {
  interface ThreeElements {
    // Daftarkan elemen kustom Anda di sini
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}