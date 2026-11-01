import JSZip from 'jszip';
import { Project } from '@webforge/schema';
import { generateNextJsProject, GeneratedFile } from '../targets/nextjs/nextjs-generator';
import { generatePhpProject } from '../targets/php/php-generator';
import { generateStaticHtmlProject } from '../targets/static/static-generator';

export type ExportTargetType = 'nextjs' | 'php' | 'static';

export function generateProjectFiles(project: Project, target: ExportTargetType): GeneratedFile[] {
  switch (target) {
    case 'nextjs':
      return generateNextJsProject(project);
    case 'php':
      return generatePhpProject(project);
    case 'static':
      return generateStaticHtmlProject(project);
    default:
      return generateNextJsProject(project);
  }
}

export async function packageProjectToZipBlob(
  project: Project,
  target: ExportTargetType = 'nextjs'
): Promise<Blob> {
  const zip = new JSZip();
  const files = generateProjectFiles(project, target);

  files.forEach((file) => {
    zip.file(file.path, file.content);
  });

  return await zip.generateAsync({ type: 'blob' });
}

export async function packageProjectToZipUint8Array(
  project: Project,
  target: ExportTargetType = 'nextjs'
): Promise<Uint8Array> {
  const zip = new JSZip();
  const files = generateProjectFiles(project, target);

  files.forEach((file) => {
    zip.file(file.path, file.content);
  });

  return await zip.generateAsync({ type: 'uint8array' });
}
