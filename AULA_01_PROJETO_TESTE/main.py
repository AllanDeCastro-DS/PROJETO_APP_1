from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.properties import ListProperty
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.uix.label import Label
from datetime import datetime

class TeacherScreen(Screen):
    def issue_pass(self):
        student_name = self.ids.student_name.text
        destination = self.ids.destination.text
        if student_name and destination:
            pass_info = {
                'name': student_name,
                'date': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'destination': destination
            }
            self.manager.get_screen('student').add_pass(pass_info)
            self.ids.student_name.text = ''
            self.ids.destination.text = ''

class StudentScreen(Screen):
    pass_list = ListProperty([])

    def add_pass(self, pass_info):
        self.pass_list.append(pass_info)
        self.ids.pass_list_layout.clear_widgets()
        for p in self.pass_list:
            self.ids.pass_list_layout.add_widget(
                Label(text=f"{p['name']} - {p['date']} - {p['destination']}")
            )

class MainScreenManager(ScreenManager):
    pass

class HallwayPassApp(App):
    def build(self):
        sm = MainScreenManager()
        sm.add_widget(TeacherScreen(name='teacher'))
        sm.add_widget(StudentScreen(name='student'))
        return sm

if __name__ == '__main__':
    HallwayPassApp().run()
