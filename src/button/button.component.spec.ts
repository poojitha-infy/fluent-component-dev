import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { Accent, Outline, Lightweight, Neutral, Stealth, ButtonWithIcon, ButtonWithIconAndText, WithLongText } from './button.stories';
import { StoryObj } from '@storybook/angular';

type StorybookStories = {
    [key: string]: StoryObj<ButtonComponent>;
  };

  const stories: StorybookStories = {
    Accent,
    Outline,
    Lightweight,
    Neutral,
    Stealth,
    ButtonWithIcon,
    ButtonWithIconAndText,
    WithLongText,
  };

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Storybook Stories', () => {

    Object.keys(stories).forEach((storyName) => {
      it(`should render ${storyName} story correctly`, () => {
        const story = stories[storyName];
        if (story.args) {
          Object.assign(component, story.args); // Safely apply args
          fixture.detectChanges();

          // Add assertions based on story
          switch (storyName) {
            case 'Accent':
              expect(component.appearance).toBe('accent');
              expect(component.content).toBe('Primary');
              break;
            case 'Outline':
              expect(component.appearance).toBe('outline');
              expect(component.content).toBe('Outline');
              break;
            case 'Lightweight':
              expect(component.appearance).toBe('lightweight');
              expect(component.content).toBe('Lightweight');
              break;
            case 'Neutral':
              expect(component.appearance).toBe('neutral');
              expect(component.content).toBe('Neutral');
              break;
            case 'Stealth':
              expect(component.appearance).toBe('stealth');
              expect(component.content).toBe('Stealth');
              break;
            case 'ButtonWithIcon':
              expect(component.iconOnly).toBe(true);
              expect(component.icon).toContain('<svg');
              expect(component.content).toBe('');
              break;
            case 'ButtonWithIconAndText':
              expect(component.icon).toBe('CalendarMonthRegular');
              expect(component.content).toBe(' image icon');
              break;
            case 'WithLongText':
              expect(component.content).toBe('Long text wraps after it hits the max width of the component');
              break;
          }
        } else {
          fail(`Story ${storyName} has no args defined`);
        }
      });
    });
  });
});
