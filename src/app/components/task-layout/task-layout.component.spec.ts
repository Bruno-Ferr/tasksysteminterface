import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLayoutComponent } from './task-layout.component';
import { By } from '@angular/platform-browser';

describe('TaskLayoutComponent', () => {
  let component: TaskLayoutComponent;
  let fixture: ComponentFixture<TaskLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskLayoutComponent); //Cria uma instância do componente, adiciona um elemento correspondente a árvore de testes DOM.
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir a mensagem fornecida como input', () => {
    component.message = 'Tarefa urgente';
    fixture.detectChanges(); // Atualiza a renderização do componente

    const messageElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(messageElement.textContent).toContain('Tarefa urgente');
  });

  it('deve aplicar a classe fornecida como tipo', () => {
    component.type = 'ph-star';
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('i')).nativeElement;
    expect(iconElement.classList).toContain('ph-star');
  });
});
