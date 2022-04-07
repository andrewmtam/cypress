// <reference types="cypress" />
/// <reference path="../support/e2e.ts" />
import type { e2eProjectDirs } from '@packages/frontend-shared/cypress/e2e/support/e2eProjectDirs'

type ProjectDirs = typeof e2eProjectDirs

const WEBPACK_REACT: ProjectDirs[number][] = ['cra-4', 'cra-5']

// Add to this list to focus on a particular permutation
const ONLY_PROJECTS: ProjectDirs[number][] = []

for (const project of WEBPACK_REACT) {
  if (ONLY_PROJECTS.length && !ONLY_PROJECTS.includes(project)) {
    continue
  }

  describe(`Working with ${project}`, () => {
    beforeEach(() => {
      cy.scaffoldProject(project)
      cy.openProject(project)
      cy.startAppServer('component')
    })

    it('should mount a passing test', () => {
      cy.visitApp()
      cy.contains('App.cy.js').click()
      cy.get('.passed > .num').should('contain', 1)
    })
  })
}
